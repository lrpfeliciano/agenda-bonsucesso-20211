import { Injectable } from '@angular/core';
import { addDoc, doc, collection, collectionData, Firestore, docData, updateDoc } from '@angular/fire/firestore';
import { deleteDoc } from 'firebase/firestore';
import { Observable } from 'rxjs';

export interface Contato{
  id?: string;
  nome: string;
  email: string;
  telefone: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  colecao: string = "contato";
  constructor(private firestore: Firestore) { }

  cadastrar(obj: any) {
    const contatos = collection(this.firestore, this.colecao);
    return addDoc(contatos, obj);
  }  

  listar():Observable<Contato[]>{
    const contatos = collection(this.firestore, 
        this.colecao);
        
    return collectionData(contatos, 
      {idField:'id'}) as Observable<Contato[]>;
  }

  buscar(id:any):Observable<Contato>{
    const contatos = doc(this.firestore, 
      this.colecao + '/' + id);
    
      return docData(contatos, 
        {idField: 'id'}) as Observable<Contato>;
  }

  alterar(obj: any){
    const contatos = doc(this.firestore, 
      this.colecao + '/' + obj.id );

    return updateDoc(contatos, {
      nome: obj.nome, email: obj.email, 
      telefone: obj.telefone
    });  
  }

  excluir(id:any){
    const contatos = doc(this.firestore, 
      this.colecao + "/" + id);
    return deleteDoc(contatos);
  }  
}


