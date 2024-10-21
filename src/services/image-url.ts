import noImage from '../assets/no-image-placeholder.webp';

const getCroppedImageUrl = (url: string) => {
    if(!url) return noImage;
    const target = 'media/';
    const index = url.indexOf(target) + target.length;
    console.log('url',url);
    console.log('target.length',target.length);
    console.log('url.indexOf(target)',url.indexOf(target));
    console.log('index',index);
    
    return url.slice(0, index) + 'crop/600/400/' + url.slice(index)
}

export default getCroppedImageUrl;