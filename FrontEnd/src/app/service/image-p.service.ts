import { Injectable } from '@angular/core';
import { getDownloadURL, list, ref, Storage, uploadBytes,} from '@angular/fire/storage'


@Injectable({
  providedIn: 'root'
})
export class ImagePService {
  url: string = "";
  constructor(private storage: Storage) { }

  public uploadImageP($event: any, name: string){
    const file = $event.target.files[0]
    const imgRefP = ref(this.storage, 'imagenProyect/' + name)
    uploadBytes(imgRefP, file)
    .then(response => {this.getImagesP()})
    .catch(error => console.log(error))
  }

  getImagesP(){
    const imagesRefP = ref(this.storage, 'imagenProyect/')
    list(imagesRefP)
    .then(async response => {
      for(let item of response.items){
        this.url = await getDownloadURL(item);
      }
    })
    .catch(error => console.log(error))
  }

  clearUrl() {
    this.url = "";
  }
}
