'''
SVD(singular value decomposition) is widely used in Recommendation System.
Here we want to offer suggestions for visitors based on the grades on all kinds of spots
Because of the sparsity of the visitor-grades matrix, we choose SVD method,
which can compress the large matrix to a smaller one to save the computation time
'''
import numpy as np
import pandas as pd
#Using liner algebra module in numpy
from numpy import linalg as la

#Using test data for validation
def DataInput():
    f=open('C:/Users/Tinky/Desktop/data.csv')
    M0=pd.read_csv(f)
    M=M0.iloc[:,1:]#M is a visitor-grades matrix
    return np.mat(M)

#Calculate the cosine similarity between vector X and vector Y
def cosSim(X,Y):
    vec_product=float(X.T*Y)
    norm_product=la.norm(X)*la.norm(Y)
    normalize=0.5*(vec_product/norm_product) +0.5#Normalization
    return normalize

#Calculate the threshold value of singular value proportion(K)
def sig_percentage(sig,percentage):
    tol_sig_Squaresum=sum(sig**2)
    initK_sig_Squaresum=K=0
    for i in sig:
        initK_sig_Squaresum+=i**2
        K+=1
        if initK_sig_Squaresum>=tol_sig_Squaresum*percentage:
            break
    return K

#Dimension reduction
def Reduction(data,percentage):
    U,S,Vt=la.svd(data)
    k=sig_percentage(S,percentage)
    sigK=np.mat(np.eye(k)*S[:k])  #The singular value matrix of SVD
    Vk=data.T*U[:,:k]*sigK.I  #Converted data of SPOT in k dimension linear space
    return Vk

#Evaluate the spots that visitors haven't been to by similarities
def Predict_score(data,visitor_Id,spot,percentage):
    n=np.shape(data)[1]#Read the column(size of the matrix's Second Dimension)
    tol_similarity=Gtol_similarity=0
    SVDreduction=Reduction(data,percentage)
    for j in range(n):
        visitorgrades=data[visitor_Id,j]
        if visitorgrades==0 or j==spot:
            continue
        similarity=cosSim(SVDreduction[spot,:].T,SVDreduction[j,:].T) #Calculate the similarity
        tol_similarity+=similarity
        Gtol_similarity+=similarity*visitorgrades
    if tol_similarity==0:
        return 0
    else:
        predict_score=Gtol_similarity/tol_similarity#Calculate the predict score
        return  predict_score

#Recommend the first k highest-score spots fot visitors
def recommend(data,visitor_Id,highest_k,percentage=0.9):
    unvisited_spot=np.nonzero(data[visitor_Id,:].A==0)[1]
    if len(unvisited_spot)==0:
        return 0
    Scores=[]
    # Predict the score
    for spot in unvisited_spot:
        Score=Predict_score(data,visitor_Id,spot,percentage)
        Scores.append((spot,Score))
    # Descending order
    Scores=sorted(Scores,key=lambda x:x[1],reverse=True)
    return Scores[:highest_k]

visitor_Id=10#Use visitor10 for example to test the model
result=pd.DataFrame(recommend(DataInput(),visitor_Id,highest_k=5))
result.rename(columns={0:'spot Id',1:'spot score'}, inplace = True)
print("For visitor No.{}, we recommend:".format(visitor_Id))
print(result)
