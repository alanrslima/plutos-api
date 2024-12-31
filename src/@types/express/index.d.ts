type FileDTO = {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  buffer: Buffer;
  size: number;
};

declare namespace Express {
  export interface Request {
    session?: {
      id: string;
      clientId: string;
      name: string;
      clientType: string;
      permissions: string[];
    };
    startedAt: number;
    files?: FileDTO[];
    file?: FileDTO;
  }

  export interface Response {
    responser: (
      status: number,
      message: string,
      data: unknown,
      error: unknown,
      type: string,
    ) => void;
  }
}
