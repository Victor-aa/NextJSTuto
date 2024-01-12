import Image from 'next/image';

export default function Page() {
    return(
        <div>
            <p>Cet examen est l'oeuvre de Victor Andrieux--Aréna</p>
            <Image
                src='/image.jpg'
                alt='image'
                width={350}
                height={350}
            />
        </div>
    );
}