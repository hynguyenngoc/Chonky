import { ChonkyIconName } from '../types/icons.types';
import { defineFileAction } from '../util/helpers';

export const ExtraActions = {
    /**
     * Action that adds a button and shortcut to copy files.
     */
    CopyFiles: defineFileAction({
        id: 'copy_files',
        requiresSelection: true,
        hotkeys: ['ctrl+c'],
        button: {
            name: 'Sao chép',
            toolbar: true,
            contextMenu: true,
            group: 'Hành động',
            icon: ChonkyIconName.copy,
        },
    } as const),
    /**
     * Action that adds a button to create a new folder.
     */
    CreateFolder: defineFileAction({
        id: 'create_folder',
        button: {
            name: 'Tạo thư mục',
            toolbar: true,
            tooltip: 'Tạo thư mục',
            icon: ChonkyIconName.folderCreate,
        },
    } as const),
    /**
     * Action that adds a button to upload files.
     */
    UploadFiles: defineFileAction({
        id: 'upload_files',
        button: {
            name: 'Tải lên tập tin',
            toolbar: true,
            tooltip: 'Tải lên tập tin',
            icon: ChonkyIconName.upload,
        },
    } as const),
    /**
     * Action that adds a button to download files.
     */
    DownloadFiles: defineFileAction({
        id: 'download_files',
        requiresSelection: true,
        button: {
            name: 'Download files',
            toolbar: true,
            contextMenu: true,
            group: 'Hành động',
            icon: ChonkyIconName.download,
        },
    } as const),
    /**
     * Action that adds a button and shortcut to delete files.
     */
    DeleteFiles: defineFileAction({
        id: 'delete_files',
        requiresSelection: true,
        hotkeys: ['delete'],
        button: {
            name: 'Xóa tập tin',
            toolbar: true,
            contextMenu: true,
            group: 'Hành động',
            icon: ChonkyIconName.trash,
        },
    } as const),
};
