import PropTypes from 'prop-types';
import { useState } from 'react';
import style from './Input.module.css';

export default function Input({ inputRef, type, accept, placeholder, focus }) {
    const [image, setImage] = useState(null);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => setImage(reader.result);
        if (file) reader.readAsDataURL(file);
    };

    if (type === 'textarea') {
        return (
            <textarea
                ref={inputRef}
                placeholder={placeholder}
                autoFocus={focus}
                className={style.input}
                rows={5}
                style={{ resize: 'vertical' }}
            ></textarea>
        );
    }

    if (type === 'file') {
        return (
            <div className={style.filecontainer}>
                <h4>{placeholder}</h4>
                {image && <img src={image} alt="uploaded" className={style.fileimage} />}
                <input
                    ref={inputRef}
                    type="file"
                    accept={accept}
                    autoFocus={focus}
                    className={style.input}
                    onChange={handleImageUpload}
                />
            </div>
        );
    }
    if (type === 'select') {
        return (
            <div>
                <select id="estado" ref={inputRef} className={style.select}>
                    <option value="ToDo">ToDo</option>
                    <option value="Doing">Doing</option>
                    <option value="Done">Done</option>
                </select>
            </div>
        );
    }

    return <input ref={inputRef} type={type} placeholder={placeholder} autoFocus={focus} className={style.input} />;
}

Input.propTypes = {
    inputRef: PropTypes.object.isRequired,
    type: PropTypes.string.isRequired,
    accept: PropTypes.string,
    placeholder: PropTypes.string.isRequired,
    focus: PropTypes.bool,
};
