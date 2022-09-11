export interface Message {
  author: string;
  text: string;
}

// export type Messages = Message[];

// 1 вариант
// export type Messages = {
//   [key: string]: Message[];
// };
//2 вариант - это объект: ключ- срока, значения - массив данных
export type Messages = Record<string, Message[]>;

export interface Chat {
  id: string;
  name: string;
}
