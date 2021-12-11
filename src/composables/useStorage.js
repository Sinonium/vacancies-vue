import {storage} from '@/firebase/config'
import { ref,uploadBytesResumable, getDownloadURL } from 'firebase/storage'

const useStorage = () => {
    let responseUrl = null
    const uploadImageAndGetImageUrl = async (moreInfoId, file) => {
       const imageRef = ref(storage, `images/${moreInfoId}/` + file.name)
       const imageUrl = await uploadBytesResumable(imageRef,file)
       responseUrl.value = await getDownloadURL(imageUrl.ref)
    };

    return {uploadImageAndGetImageUrl, responseUrl}
}

export default useStorage