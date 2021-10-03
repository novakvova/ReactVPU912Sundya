import { useState } from "react";
const MyPhotoInput = ({
    field,
    formikRef
}) => {

    const [photo, setPhoto] = useState("https://bytes.ua/wp-content/uploads/2017/08/no-image.png");
    
    const selectImage = (event) => {
        const FILE_OBJECT= event.currentTarget.files[0];
        setPhoto(URL.createObjectURL(FILE_OBJECT));
        formikRef.current.setFieldValue(field, FILE_OBJECT); 
    }

    return (
        <div className="mb-3">
            <label htmlFor={field}>
                <img
                    src={photo}
                    width="150"
                />
            </label>
            <input type="file"
                style={{display:"none"}}
                className="form-control"
                id={field}
                onChange = {selectImage}
                 />
            
        </div>
    );
};
export default MyPhotoInput;