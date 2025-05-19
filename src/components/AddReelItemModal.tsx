"use client"

import React, { Dispatch, SetStateAction, useCallback } from 'react';
import { useEffect, useState } from 'react';
import { ImCross } from "react-icons/im";
import { useSearchParams } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';


interface OrderTransferModalProps {
    isAddModalActive?: boolean;
}

const AddReelItemModal = ({ isAddModalActive }: OrderTransferModalProps) => {




    return (
        <>

            {(isAddModalActive) && (

                <div className="fixed inset-0 z-999 overflow-y-auto md:overflow-y-hidden md:mt-7 mt-6">
                    <div className="flex items-center justify-center min-h-screen pt-4 px-6 text-center sm:block sm:p-0">
                        {/* Modal content */}
                        <div className="md:mt-20  md:ml-28 inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle mt-16">
                            <div className='flex justify-center bg-blue-400 rounded-lg p-2 '>
                                <div className='text-xl font-bold text-center text-white'>
                                    Item Feeding (Reel No Wise/Barcode Wise)
                                </div>
                            </div>

                            <button

                                className="absolute top-4 right-4 text-blue-950 hover:text-black-700 focus:outline-none"
                            >
                                <ImCross />
                            </button>


                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4  dark:border-strokedark dark:bg-boxdark ">
                                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 gap-2  max-w-3xl mx-auto over overflow-x-auto">

                                    {/* Left side */}
                                    <div className=" space-y-3 md:flex-row  md:items-center">

                                        {/* CO S.No, Item Name *, Description */}
                                        <div className='border border-transparent sm:border-2 sm:border-solid'>
                                            <label htmlFor="stritemDesc" className=" block text-sm font-medium text-black dark:text-white">Bar Code</label>
                                            <div className='relative z-20 bg-white dark:bg-form-input  border border-gray-300 rounded-md shadow-sm'>

                                                <input type="text" name="stritemDesc" id="stritemDesc" className=" relative z-20 w-full appearance-none rounded border border-stroke bg-transparent px-1  outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input h-8" />

                                            </div>

                                            <div className='mt-3 '>
                                                <label htmlFor="stritemDesc" className=" block text-sm font-medium text-black dark:text-white">Reel No</label>
                                                <div className='relative z-20 bg-white dark:bg-form-input  border border-gray-300 rounded-md shadow-sm'>

                                                    <input type="text" name="stritemDesc" id="stritemDesc" className=" relative z-20 w-full appearance-none rounded border border-stroke bg-transparent px-1  outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input h-8" />

                                                </div>

                                            </div>

                                            <div className='mt-3 '>
                                                <label htmlFor="stritemDesc" className=" block text-sm font-medium text-black dark:text-white">Item Name</label>
                                                <div className='relative z-20 bg-white dark:bg-form-input  border border-gray-300 rounded-md shadow-sm'>

                                                    <input type="text" name="stritemDesc" id="stritemDesc" className=" relative z-20 w-full appearance-none rounded border border-stroke bg-transparent px-1  outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input h-8" />

                                                </div>

                                            </div>

                                            <div className='mt-3'>
                                                <label htmlFor="stritemDesc" className=" block text-sm font-medium text-black dark:text-white">BF</label>
                                                <div className='relative z-20 bg-white dark:bg-form-input  border border-gray-300 rounded-md shadow-sm'>

                                                    <input type="text" name="stritemDesc" id="stritemDesc" className=" relative z-20 w-full appearance-none rounded border border-stroke bg-transparent px-1  outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input h-8" />

                                                </div>
                                            </div>


                                            <div className='mt-3'>
                                                <label htmlFor="stritemDesc" className=" block text-sm font-medium text-black dark:text-white">GSM</label>
                                                <div className='relative z-20 bg-white dark:bg-form-input  border border-gray-300 rounded-md shadow-sm'>

                                                    <input type="text" name="stritemDesc" id="stritemDesc" className=" relative z-20 w-full appearance-none rounded border border-stroke bg-transparent px-1  outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input h-8" />

                                                </div>
                                            </div>
                                            <div className='mt-3'>
                                                <label htmlFor="stritemDesc" className=" block text-sm font-medium text-black dark:text-white">Unit</label>
                                                <div className='relative z-20 bg-white dark:bg-form-input  border border-gray-300 rounded-md shadow-sm'>

                                                    <input type="text" name="stritemDesc" id="stritemDesc" className=" relative z-20 w-full appearance-none rounded border border-stroke bg-transparent px-1  outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input h-8" />

                                                </div>
                                            </div>
                                        </div>



                                    </div>



                                    {/* Right side */}
                                    <div className="flex-1">
                                        <div className='border border-transparent sm:border-2 sm:border-solid'>
                                            <label htmlFor="stritemDesc" className=" block text-sm font-medium text-black dark:text-white">Size</label>
                                            <div className='relative z-20 bg-white dark:bg-form-input  border border-gray-300 rounded-md shadow-sm'>

                                                <input type="text" name="stritemDesc" id="stritemDesc" className=" relative z-20 w-full appearance-none rounded border border-stroke bg-transparent px-1  outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input h-8" />

                                            </div>

                                            <div className='mt-3 '>
                                                <label htmlFor="stritemDesc" className=" block text-sm font-medium text-black dark:text-white">Weight</label>
                                                <div className='relative z-20 bg-white dark:bg-form-input  border border-gray-300 rounded-md shadow-sm'>

                                                    <input type="text" name="stritemDesc" id="stritemDesc" className=" relative z-20 w-full appearance-none rounded border border-stroke bg-transparent px-1  outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input h-8" />

                                                </div>

                                            </div>

                                            <div className='mt-3 '>
                                                <label htmlFor="stritemDesc" className=" block text-sm font-medium text-black dark:text-white">Rate</label>
                                                <div className='relative z-20 bg-white dark:bg-form-input  border border-gray-300 rounded-md shadow-sm'>

                                                    <input type="text" name="stritemDesc" id="stritemDesc" className=" relative z-20 w-full appearance-none rounded border border-stroke bg-transparent px-1  outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input h-8" />

                                                </div>

                                            </div>

                                            <div className='mt-3'>
                                                <label htmlFor="stritemDesc" className=" block text-sm font-medium text-black dark:text-white">Container No</label>
                                                <div className='relative z-20 bg-white dark:bg-form-input  border border-gray-300 rounded-md shadow-sm'>

                                                    <input type="text" name="stritemDesc" id="stritemDesc" className=" relative z-20 w-full appearance-none rounded border border-stroke bg-transparent px-1  outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input h-8" />

                                                </div>
                                            </div>


                                            <div className='mt-3'>
                                                <label htmlFor="stritemDesc" className=" block text-sm font-medium text-black dark:text-white">Shipping Seal</label>
                                                <div className='relative z-20 bg-white dark:bg-form-input  border border-gray-300 rounded-md shadow-sm'>

                                                    <input type="text" name="stritemDesc" id="stritemDesc" className=" relative z-20 w-full appearance-none rounded border border-stroke bg-transparent px-1  outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input h-8" />

                                                </div>
                                            </div>
                                            <div className='mt-3'>
                                                <label htmlFor="stritemDesc" className=" block text-sm font-medium text-black dark:text-white">RFID Seal</label>
                                                <div className='relative z-20 bg-white dark:bg-form-input  border border-gray-300 rounded-md shadow-sm'>

                                                    <input type="text" name="stritemDesc" id="stritemDesc" className=" relative z-20 w-full appearance-none rounded border border-stroke bg-transparent px-1  outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input h-8" />

                                                </div>
                                            </div>
                                        </div>



                                    </div>

                                    {/* Table */}
                                    <div className="overflow-x-auto mt-2">
                                        <div className="overflow-x-auto mt-2">
                                            {/* <TableThree /> */}
                                            <div className="rounded-sm border border-stroke bg-white px-2 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-2 xl:pb-1">
                                                <div className="max-w-full overflow-x-auto">
                                                    <table className="w-full table-auto">
                                                        <thead>
                                                            <tr className="bg-gray-2 text-left dark:bg-meta-4">
                                                                <th className="min-w-[220px] px-1 py-4 font-medium text-black dark:text-white xl:pl-4">
                                                                    Order No
                                                                </th>
                                                                <th className="min-w-[60px] px-1 py-4 font-medium text-black dark:text-white">
                                                                    Item Name
                                                                </th>
                                                                <th className="min-w-[60px] px-1 py-4 font-medium text-black dark:text-white">
                                                                    BF
                                                                </th>
                                                                <th className="min-w-[60px] px-1 py-4 font-medium text-black dark:text-white">
                                                                    Width
                                                                </th>
                                                                <th className="min-w-[60px] px-1 py-4 font-medium text-black dark:text-white">
                                                                    Unit
                                                                </th>
                                                                <th className="min-w-[60px] px-1 py-4 font-medium text-black dark:text-white">
                                                                    GSM
                                                                </th>
                                                                <th className="min-w-[60px] px-1 py-4 font-medium text-black dark:text-white">
                                                                    Reel No
                                                                </th>
                                                                <th className="min-w-[60px] px-1 py-4 font-medium text-black dark:text-white">
                                                                    Weight
                                                                </th>
                                                                <th className="px-1 py-4 font-medium text-black dark:text-white text-center">
                                                                    Rate
                                                                </th>
                                                                <th className="px-1 py-4 font-medium text-black dark:text-white text-center">
                                                                    Barcode
                                                                </th>
                                                            </tr>
                                                        </thead>

                                                    </table>
                                                </div>

                                            </div>
                                        </div>
                                    </div >



                                    {/* Submit and Reload Button */}
                                    <div className="grid grid-cols-2 gap-4 mt-4 md:mt-6">
                                        <button

                                            className="  px-1 h-7 md:px-4 border border-transparent shadow-sm text-base md:text-sm font-bold rounded-md text-white bg-blue-500"
                                        >Submit</button>
                                        <button

                                            className="  px-1 h-7 md:px-4 border border-transparent shadow-sm text-base md:text-sm font-bold rounded-md text-white bg-blue-500"
                                        >Reload</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </>

    );
}

export default AddReelItemModal;
























































































