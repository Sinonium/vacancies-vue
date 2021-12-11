import { ref,uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import {storage} from '@/firebase/config'

export const useStorage = () => {
    const uploadImageAndGetImageUrl = async (file) => {
       const imageRef = ref(storage, 'images/' + file.name)
       const text = await uploadBytesResumable(imageRef,file)
    };

    return {uploadImageAndGetImageUrl}
}