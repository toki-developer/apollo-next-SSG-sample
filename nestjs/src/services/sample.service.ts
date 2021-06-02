import { Injectable } from '@nestjs/common';

type SampleDataType = {
  id: string;
  name: string;
  freeInput: string;
}[];

const sampleData: SampleDataType = [
  {
    id: '45268',
    name: 'sample',
    freeInput: 'こんにちは',
  },
  {
    id: '43154',
    name: 'test',
    freeInput: 'testしてます',
  },
  {
    id: '67384',
    name: 'robot',
    freeInput: 'フガフガホゲホゲ',
  },
  {
    id: '45320',
    name: 'hoge',
    freeInput: 'hogehogeho',
  },
  {
    id: '56177',
    name: 'huga',
    freeInput: 'hugahugaga',
  },
];
@Injectable()
export class SampleService {
  async sample(id: string) {
    const dataArray = sampleData.filter((data) => {
      return data.id == id;
    });
    const data = dataArray[0];
    return { id: data.id, name: data.name, freeInput: data.freeInput };
  }

  async getDatas() {
    return sampleData;
  }
}
