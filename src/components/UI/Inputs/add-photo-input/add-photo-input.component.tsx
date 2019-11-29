// import React, {ReactElement, useState} from 'react';
// import './add-photo-input.component.scss';
// import IconCamera from '../../../../assets/ui-icons/ADD PHOTO ICON.svg';
// import {ReactComponent as IconEdit} from '../../../../assets/ui-icons/Icon_Edit_24.svg';
// import {connect} from 'react-redux';
// import {
//     AddPhotoInputOnChangeInterface,
//
//     AddPhotoInputPropsInterface
// } from '../../../_interfaces/shared/inputs/add-photo-input/props.interface';
// import {AddPhotoInputStateInterface} from '../../../_interfaces/shared/inputs/add-photo-input/state.interface';
// import reactHtmlParser from 'react-html-parser';
// import {
//     fileSizeErrorMessage,
//     maximumFileSizeMB,
//     maximumFileSize,
//     lastIndex,
//     acceptedImgFormat,
//     imgTypeErrorMessage
// } from '../../../_consts/add-photo.const';
//
// const isExtensionCorrect = (fileType: string): boolean =>
//     acceptedImgFormat.some((format): boolean => format === fileType);
//
// const isSizeTooLarge = (img: any): boolean =>
//     img && img.size > maximumFileSize;
//
// const getImageError = (fileType: string, img: any): string => {
//     if (!isExtensionCorrect(fileType)) {
//         return imgTypeErrorMessage;
//     } else if (isSizeTooLarge(img)) {
//         return `${fileSizeErrorMessage} ${maximumFileSizeMB}`;
//     }
//
//     return '';
// };
//
// const fetchImgDomain = (img: any): string => {
//     if (img) {
//         const imgNameArray = img.name.split('.');
//         const imgDomain = imgNameArray[imgNameArray.length - lastIndex].toString().toLowerCase();
//         return imgDomain;
//     }
//     return '';
// };
//
// const onChange = ({
//     event,
//     setImageError,
//     setAvatar,
//     onFileChange}: AddPhotoInputOnChangeInterface): void => {
//     if (event && event.target && event.target.files) {
//         const img = Array.from(event.target.files).pop();
//         const imgDomain = fetchImgDomain(img);
//         const error = getImageError(imgDomain, img);
//         if (!error) {
//             onFileChange(img);
//             setAvatar(URL.createObjectURL(img));
//         } else {
//             setImageError(error);
//         }
//     }
// };
//
// const AddPhotoInputComponent = ({
//     user,
//     onFileChange
// }: AddPhotoInputPropsInterface): ReactElement => {
//     const [avatar, setAvatar] = useState(user && user.avatarURI);
//     const [imageError, setImageError] = useState('');
//
//     return (
//         <label htmlFor='fileInput' className={'add-photo-input-input-file'}>
//             <input
//                 id='fileInput'
//                 type='file'
//                 onChange={(event): void => onChange({event, setImageError, setAvatar, onFileChange})}
//                 className={'add-photo-input-hidden-file-input'}
//                 accept={'image/*'}
//             />
//             <img
//                 src={avatar ? avatar : IconCamera}
//                 className={avatar ? 'add-photo-input-avatar' : 'add-photo-input-icon'}
//                 alt={'avatar icon'}/>
//             <div className='add-photo-input-edit'>
//                 <IconEdit/>
//             </div>
//             {imageError &&
//                 <div className={'add-photo-upload-error'}>
//                     {reactHtmlParser(imageError)}
//                 </div>
//             }
//         </label>
//     );
// };
//
// const AddPhotoInputComponentConnect = connect((state: AddPhotoInputStateInterface) => ({
//     user: state.userInfo.user
// }))(AddPhotoInputComponent);
//
// export default {
//     AddPhotoInputComponentConnect,
//     isExtensionCorrect,
//     isSizeTooLarge,
//     getImageError,
//     fetchImgDomain,
//     onChange
// };
