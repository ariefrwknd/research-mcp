export function DetailEventDescription() {
  return (
    <div className="flex w-full flex-col gap-6 px-2 pb-2 pt-0 sm:gap-[30px] sm:px-[10px] sm:pb-[10px]">
      {/* Description Section */}
      <div className="flex flex-col gap-2 text-sm sm:gap-[10px] sm:text-base">
        <p className="font-bold leading-normal text-[#2c2a29]">Deskripsi</p>
        <div className="font-normal leading-6 text-[#413f3e] sm:leading-[24px]">
          <p className="mb-0">
            Quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
            aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          </p>
          <p>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
            numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Quasi architecto
            beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.
          </p>
        </div>
      </div>
      
      {/* Terms & Conditions Section */}
      <div className="flex flex-col gap-2 text-sm sm:gap-[10px] sm:text-base">
        <p className="font-bold leading-normal text-[#2c2a29]">Syarat & Ketentuan</p>
        <div className="font-normal leading-6 text-[#413f3e] sm:leading-[24px]">
          <p className="mb-0">For our convenience, please read it first</p>
          <p className="mb-0">Friday Noraebang Event T&C :</p>
          <ul className="ml-4 list-disc sm:ml-6">
            <li className="mb-0">
              <span className="leading-6 sm:leading-[24px]">
                Proof of ID is a requirement for every ticket purchasedWajib menunjukkan kartu identitas untuk setiap
                pembelian tiket.
              </span>
            </li>
            <li className="mb-0">
              <span className="leading-6 sm:leading-[24px]">
                E-voucher can be exchanged at the venue start from 19.00 - 22.00E-voucher ini dapat ditukarkan dengan
                tiket asli dimulai pada pukul 19.00 - 22.00 di tempat acara.
              </span>
            </li>
            <li className="mb-0">
              <span className="leading-6 sm:leading-[24px]">
                Tickets are non-refundableTiket yang sudah dibeli tidak dapat dikembalikan
              </span>
            </li>
            <li className="mb-0">
              <span className="leading-6 sm:leading-[24px]">
                We are NOT responsible for the lost of this e-voucherKami tidak bertanggung jawab atas kehilangan
                e-voucher ini
              </span>
            </li>
            <li className="mb-0">
              <span className="leading-6 sm:leading-[24px]">DILARANG MEMBAWA SENJATA ATAU OBAT-OBATAN</span>
            </li>
            <li>
              <span className="leading-6 sm:leading-[24px]">
                We will have every right to refuse and/or discharge entry for ticket holders that does not meet the
                Term & ConditionPenyelenggara berhak untuk tidak memberikan izin untuk masuk ke dalam tempat acara
                apabila syarat-syarat & ketentuan tidak dipenuhi
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

