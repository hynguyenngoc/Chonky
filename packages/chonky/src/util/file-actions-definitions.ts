import { FileAction } from '../types/action.types';
import { ChonkyIconName } from '../types/icons.types';

const validateActionTypes = <T extends { [action: string]: FileAction }>(
    actionMap: T
): T => actionMap;

export const OldChonkyActions = validateActionTypes({
    // Optional actions
    CopyFiles: {
        id: 'copy_files',
        requiresSelection: true,
        hotkeys: ['ctrl+c'],
        button: {
            name: 'Sao chép',
            toolbar: true,
            contextMenu: true,
            group: 'Hành động',
            dropdown: true,
            icon: ChonkyIconName.copy,
        },
    },
    CreateFolder: {
        id: 'create_folder',
        button: {
            name: 'Tạo thư mục',
            toolbar: true,
            contextMenu: true,
            tooltip: 'Tạo thư mục',
            icon: ChonkyIconName.folderCreate,
        },
    },
    UploadFiles: {
        id: 'upload_files',
        button: {
            name: 'Tải lên tập tin',
            toolbar: true,
            contextMenu: true,
            tooltip: 'Tải lên tập tin',
            icon: ChonkyIconName.upload,
        },
    },
    DownloadFiles: {
        id: 'download_files',
        requiresSelection: true,
        button: {
            name: 'Download files',
            toolbar: true,
            contextMenu: true,
            group: 'Hành động',
            tooltip: 'Download files',
            dropdown: true,
            icon: ChonkyIconName.download,
        },
    },
    DeleteFiles: {
        id: 'delete_files',
        requiresSelection: true,
        hotkeys: ['delete'],
        button: {
            name: 'Xóa tập tin',
            toolbar: true,
            contextMenu: true,
            group: 'Hành động',
            tooltip: 'Xóa tập tin',
            dropdown: true,
            icon: ChonkyIconName.trash,
        },
    },
});
