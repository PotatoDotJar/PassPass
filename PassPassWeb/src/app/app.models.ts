
export interface PasswordSaveModel {
    label: string;
    password: string;
}

export interface PasswordSaveResult {
    success: boolean;
    new_Id: string;
}

export interface PasswordRecord {
    id: string;
    created_By_IP: string;
    created: Date;
    label: string;
    password: string;
}