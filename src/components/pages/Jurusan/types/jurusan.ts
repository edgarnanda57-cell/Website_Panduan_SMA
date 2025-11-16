export interface Jurusan {
  id: string;
  NamaJurusan: string;
  Type: string;
  PengetahuanKeahlian: { text: string }[];
  ProspekKerja: { text: string }[];
}
