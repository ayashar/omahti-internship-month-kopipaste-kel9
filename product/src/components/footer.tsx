import { Button } from "./roadmap-button";

const Footer = () => {
    return (
        <div className="bg-gray text-white p-16 flex flex-col text-[24px] font-bold">
            <p>Omah<span className="text-orange">Arsip</span></p>
            <p className="text-light-gray text-[15px] font-normal">Oleh kelompok 9 OmahTI Internship Month - Kopi Paste</p>
            <div className="flex flex-row justify-between items-center">
                <div className="font-normal text-[20px]">
                    <p>Departemen Ilmu Komputer dan Elektronika</p>
                    <p>Fakultas Matematika dan Ilmu Pengetahuan Alam Universitas Gadjah Mada Gedung C, Lantai 4 Sekip Utara</p>
                    <p>Bulaksumur Yogyakarta 55281</p>
                </div>
                <Button variant="default" className="w-60 m-10 hover:bg-black hover:text-white transition-colors duration-200">
                    <a href="https://omahti.web.id/">Contact Us</a>
                </Button>
            </div>
        </div>
    );
}

export default Footer;