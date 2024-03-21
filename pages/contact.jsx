import Head from 'next/head'
import Image from 'next/image'
import swr from '../lib/swr';


export default function Home() {
  const { veri: _projects } = swr('/api/projeler');
  const projeler = _projeler ? _projeler : null;

  dönüş (
    <>
      <div className="py-20">
        <p className="text-3xl text-white font-semibold text-center">Bana Ulaşın</p>
        <p className="text-xl text-white/50 font-normal text-center mb-5">Benimle iletişime geçebileceğiniz diğer adresler.</p>
        <div className=" flex justify-center flex-col items-center">
            <div className="max-w-lg w-full">
                <a target="_blank" rel="norefferer" href="https://www.instagram.com/egeefe.er4/">
                    <div className="flex justify-between bg-zinc-500/5 hover:bg-zinc-500/10 transition-all duration-200 px-4 py-2 rounded-lg items-center">
                        <i className="fab fa-instagram fa-2x" />
                        <p className="font-semibold text-xl">@egeefe.er4</p>
                    </div>
                </a>
                <a target="_blank" rel="norefferer" href="https://discord.com/users/891814285704065085">
                    <div className="mt-2 flex justify-between bg-zinc-500/5 hover:bg-zinc-500/10 transition-all duration-200 px-4 py-2 rounded-lg items-center">
                        <i className="fab fa-discord fa-2x" />
                        <p className="font-semibold text-xl">asker1283</p>
                    </div>
                </a>
                <a href="mailto:erege5874@gmail.com">
                    <div className="mt-2 flex justify-between bg-zinc-500/5 hover:bg-zinc-500/10 transition-all duration-200 px-4 py-2 rounded-lg items-center">
                        <i className="fa fa-envelope fa-2x" />
                        <p className="font-semibold text-xl">erege5874@hotmail.com</p>
                    </div>
                </a>
            </div>
        </div>
      </div>
    </>
  )
}
import Head from 'next/head'
import Image from 'next/image'
import swr from '../lib/swr';


export default function Home() {
  const { veri: _projects } = swr('/api/projeler');
  const projeler = _projeler ? _projeler : null;

  dönüş (
    <>
      <div className="py-20">
        <p className="text-3xl text-white font-semibold text-center">Bana Ulaşın</p>
        <p className="text-xl text-white/50 font-normal text-center mb-5">Benimle iletişime geçebileceğiniz diğer adresler.</p>
        <div className=" flex justify-center flex-col items-center">
            <div className="max-w-lg w-full">
                <a target="_blank" rel="norefferer" href="https://www.instagram.com/egeefe.er4/">
                    <div className="flex justify-between bg-zinc-500/5 hover:bg-zinc-500/10 transition-all duration-200 px-4 py-2 rounded-lg items-center">
                        <i className="fab fa-instagram fa-2x" />
                        <p className="font-semibold text-xl">@egeefe.er4</p>
                    </div>
                </a>
                <a target="_blank" rel="norefferer" href="https://discord.com/users/891814285704065085">
                    <div className="mt-2 flex justify-between bg-zinc-500/5 hover:bg-zinc-500/10 transition-all duration-200 px-4 py-2 rounded-lg items-center">
                        <i className="fab fa-discord fa-2x" />
                        <p className="font-semibold text-xl">asker1283</p>
                    </div>
                </a>
                <a href="mailto:umutbayraktar55@gmail.com">
                    <div className="mt-2 flex justify-between bg-zinc-500/5 hover:bg-zinc-500/10 transition-all duration-200 px-4 py-2 rounded-lg items-center">
                        <i className="fa fa-envelope fa-2x" />
                        <p className="font-semibold text-xl">erege5874@gmail.com</p>
                    </div>
                </a>
            </div>
        </div>
      </div>
    </>
  )
}
