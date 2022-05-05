import React from 'react';
import { FileUploadItem } from '@alfalab/core-components-file-upload-item';
import StarLineMIcon from '@alfalab/icons-glyph/StarLineMIcon';
import { Wrapper } from './Wrapper';

const FileUploadItemExample = () => {
    return (
        <Wrapper>
            <FileUploadItem
                name='Довольно длинное название файла.pdf'
                uploadDate='22.01.2018'
                size={500000000}
                showDelete={false}
                showRestore={true}
            />
            <FileUploadItem
                name='Название файла.pdf'
                uploadDate='22.01.2018'
                size={45000}
                showDelete={true}
            />
            <FileUploadItem
                name='С кастомной иконкой.pdf'
                uploadDate='22.01.2018'
                size={50000000}
                showDelete={true}
                icon={StarLineMIcon}
            />
            <FileUploadItem
                name='Название файла.txt'
                uploadDate='22.01.2018'
                size={45000}
                downloadLink='/link'
                uploadStatus='SUCCESS'
                showDelete={true}
            />
            <FileUploadItem
                name='Название файла.jpg'
                uploadDate='22.01.2018'
                size={45000}
                uploadStatus='ERROR'
                showDelete={true}
            />
            <FileUploadItem
                name='Название файла.png'
                uploadDate='22.01.2018'
                size={45000}
                uploadStatus='UPLOADING'
                uploadPercent={23.5678}
                showDelete={true}
            />
            <FileUploadItem
                name='Название файла.pdf'
                uploadDate='22.01.2018'
                size=''
                uploadStatus='LOADING'
                showDelete={false}
            />
            <FileUploadItem
                name='Название файла.png'
                uploadDate='22.01.2018'
                size={450000000}
                uploadStatus='ERROR'
                error={
                    <React.Fragment>
                        <p style={{ margin: 0, marginBottom: '8px' }}>Размер больше 500 Кб</p>
                        <p style={{ margin: 0 }}>
                            Недопустимый формат файла. Загрузите файл в одном из этих форматов:
                            .txt, .xml, .csv
                        </p>
                    </React.Fragment>
                }
                showDelete={false}
            />
        </Wrapper>
    );
};

export default FileUploadItemExample;
