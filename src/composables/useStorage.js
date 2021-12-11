import { ref,uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import {storage} from '@/firebase/config'

export const useStorage = () => {
    const uploadImageAndGetImageUrl = async (file) => {
       const imageRef = ref(storage, 'images/' + file.name)
       const imageUrl = await uploadBytesResumable(imageRef,file)
       const url = await getDownloadURL(imageUrl.ref)
       console.log(url)

    };

    return {uploadImageAndGetImageUrl}
}