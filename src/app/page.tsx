"use client"

import { useEffect, useState } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Divider from '@mui/material/Divider'


import { Html5QrcodeScanner, Html5QrcodeScanType } from "html5-qrcode";


export default function Home() {


  const [entryTypeCode, setEntryTypeCode] = useState<string>('');


  const [entryNumberCode, setEntryNumberCode] = useState<string>('');


  const [entryDateCode, setEntryDateCode] = useState<string>('');


  const [transferTypeCode, setTransferTypeCode] = useState<string>('');

  const [barCode, setBarCode] = useState<string>('');
  const [qrCode, setQrCode] = useState<string>('');


  const [scanResult, setScanResult] = useState<string>('')


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    if (name == 'entryType') {
      setEntryTypeCode(value)
    }
    if (name == 'entryNumber') {
      setEntryNumberCode(value)
    }
    if (name == 'entryDate') {
      setEntryDateCode(value)
    }
    if (name == 'transferType') {
      setTransferTypeCode(value)
    }
    if (name == 'barcodeYN') {
      setBarCode(value)
    }
    if (name == 'qrCode') {
      setQrCode(value)
    }

  };


  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      'reader',
      {
        qrbox: {
          width: 250,
          height: 250,
        },
        fps: 5,
        supportedScanTypes: [Html5QrcodeScanType.SCAN_TYPE_CAMERA] // Required field
      },
      false // verbose
    );


    scanner.render(success, error);


    function success(result: string) {
      scanner.clear();
      setScanResult(result);
    }

    function error(err: unknown) {
      console.warn(err);
    }

    return () => {
      scanner.clear().catch((e) => console.error("Failed to clear scanner", e));
    };
  }, []);



  return (
    <>



      <div style={{ marginTop: '10px' }}>
        <Card>
          <CardHeader
            title='Order Transfer'
            action={
              <div style={{ display: 'flex' }}>

              </div>
            }
          />
          <Divider variant='middle' />
          <CardContent sx={{ padding: '10px' }}>



            <div className="grid grid-cols-1 md:gap-8 sm:grid-cols-2 md:ml-20 md:mr-20">
              <div className="flex flex-col gap-4">

                <div className="md:h-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">

                  <div className="flex flex-col gap-2 md:p-3 p-2">


                    <div className="md:mt-0">


                      <label htmlFor="entryType" className="block text-sm font-medium text-black dark:text-white">Entry Type</label>
                      <select
                        name="entryType"
                        id="entryType"
                        value={entryTypeCode}
                        onChange={handleChange}
                        className="form-datepicker w-full rounded border-[1.5px] border-stroke bg-transparent  h-8 font-normal outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      >

                        <option value="">Select</option>
                        <option value="ot">Order Transfer</option>
                        <option value="gt">Godown Transfer</option>
                      </select>

                    </div>




                    <div className="md:mt-2">

                      <label htmlFor="entryNumber" className={`block text-sm font-medium text-black dark:text-white`}>Entry No</label>
                      <div className="flex items-center">
                        <input
                          name="entryNumber"
                          value={entryNumberCode}
                          onChange={handleChange}
                          id="entryNumber"
                          type="number"
                          className="form-datepicker w-full rounded border-[1.5px] border-stroke bg-transparent px-1 py-3 h-8 font-normal outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        />
                      </div>
                    </div>


                    <div className="md:mt-2">
                      <label htmlFor="entryDate" className="block text-sm font-medium text-black dark:text-white">
                        Entry Date
                      </label>
                      <input
                        type="date"
                        value={entryDateCode}
                        onChange={handleChange}
                        id="entryDate"
                        name="entryDate"
                        className="form-datepicker w-full rounded border-[1.5px] border-stroke bg-transparent px-1 py-3 h-8 font-normal outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      />


                    </div>

                  </div>
                </div>


              </div>

              <div className="flex flex-col  gap-2">
                {/* <!-- Input Fields --> */}
                <div className="md:h-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">

                  <div className="flex flex-col gap-2 md:p-3 p-2">

                    <div>

                      <div>
                        <div className="gap-2 md:mt-0">
                          <label htmlFor="transferType" className="block text-sm font-medium text-black dark:text-white">Transfer Type</label>
                          <select
                            name="transferType"
                            id="transferType"
                            value={transferTypeCode}
                            onChange={handleChange}
                            className="form-datepicker w-full rounded border-[1.5px] border-stroke bg-transparent  h-8 font-normal outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                          >

                            <option value="">Select</option>
                            <option value="a">A</option>
                            <option value="b">B</option>
                          </select>


                        </div>

                        <div className="gap-2 md:mt-3 mt-2">
                          <label htmlFor="barcodeYN" className={`block text-sm font-medium text-black dark:text-white`}>Get New BarcodeYN</label>
                          <div className="flex items-center">
                            <input
                              name="barcodeYN"
                              value={barCode}
                              onChange={handleChange}
                              id="barcodeYN"
                              type="text"

                              className="form-datepicker w-full rounded border-[1.5px] border-stroke bg-transparent px-1 py-3 h-8 font-normal outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                            />
                          </div>
                        </div>

                        <div className="gap-2 md:mt-3 mt-2">
                          <label htmlFor="qrCode" className="block text-sm font-medium text-black dark:text-white">
                            Get New QRcodeYN <span style={{ color: 'red' }}>*</span>
                          </label>
                          <input
                            id="qrCode"
                            name="qrCode"
                            type="text"
                            value={qrCode}
                            onChange={handleChange}
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent md:px-1 px-1 py-3 h-8 font-normal outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"

                          />

                        </div>

                      </div>

                    </div>



                  </div>
                </div>


              </div>


            </div >


            <div className="md:ml-20">
              <button
             
                className='md:px-2 cursor-pointer px-1 font-bold py-2 md:py-2 mt-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200'
              >
                Reel Item
              </button>
            </div >


            <div className="md:mt-4 mt-2 md:ml-20 md:mr-20">
              <div className="text-sm font-medium text-black">Scan QR Code to fill the Reel Item Details</div>
              {
                scanResult
                  ? <div>Success: <a href={"http://" + scanResult}>{scanResult}</a></div>
                  : <div id="reader"></div>
              }

            </div>




            <div className="flex justify-end md:mr-20 md:ml-20">
              <button

                className="w-14 px-1 py-2 md:p-2 mt-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
              >
                Save
              </button>
            </div>


         



          </CardContent>
        </Card>
      </div>
















    </>
  );
}


