from django.shortcuts import render
from django.http import HttpResponse
import datetime

import re
import collections
import nltk
nltk.download('stopwords')
from nltk.corpus import stopwords
from nltk.stem.porter import PorterStemmer
from nltk import SnowballStemmer
import requests
import json



# Create your views here.
def index(request, *args, **kwargs):
    return render(request, 'frontend/index.html')

def similar(request):

    fecha_actual=datetime.datetime.now()

    documento="""<html>
    <body>
    <h1>Fecha y hora actuales %s
    </body>
    </html>""" % fecha_actual

    return HttpResponse(documento)


def buscar(request):

    apiKey="pczElohYIxt0gfQGR1BkZAD6vF4CKUSJ"

    titulo = "%r" %request.GET["titulo"]

    def pesado(texto,texto2):
        a1= re.sub('[^A-Za-z0-9]+', ' ', texto)
        b1=a1.lower()
        c1=b1.split()

        a2= re.sub('[^A-Za-z0-9]+', ' ', texto2)
        b2=a2.lower()
        c2=b2.split()
        
        vec = [[c1]+[c2]]
        print(vec)
        n = stopwords.words('english')
        for w in vec:
            for z in w:
                for y in z:
                    if y in n:
                        z.remove(y)
        rep=0
    
        for x in c1:
            if x in c2:
                rep = rep+1

        vec_co = []
        for i in vec:
            for j in i:
                vec_co += [j]

        vec_copia = []
        for i in vec_co:
            for j in i:
                vec_copia += [j]
        for v in range(len(vec_copia)-1):
            c=-1
            for r in vec_copia:
                c=c+1
                if r == vec_copia[v] and c != v:
                    vec_copia[c]=None
        vec_final=[]
        for f in vec_copia:
            if f != None:
                vec_final += [f]
        tam = len(vec_final)
        dist="{0:.2f}".format((rep/tam)*100)
        return dist
    
    param = '[{"text": "%r"}]' %request.GET["titulo"]
    simi = requests.post("https://core.ac.uk:443/api-v2/articles/similar?limit=10&metadata=true&fulltext=false&citations=false&similar=false&duplicate=false&urls=false&faithfulMetadata=false&apiKey=pczElohYIxt0gfQGR1BkZAD6vF4CKUSJ",param)
    if simi.status_code == 200:
        print('Datos cargados con exito')
    


    

    
    ja = simi.text
    data = json.loads(ja)
    prue = data['data']
    x=[]
    for y in range(len(prue)):
        data = json.dumps(prue[y])
        t = json.loads(data)
        pes = pesado(titulo,t['title'])
        x += [[t['title'],t['topics'],t['description'],"Jaccard titulo: "+pes+" %"]]
    
    


    return render(request,"similar.html",{"papers":x})