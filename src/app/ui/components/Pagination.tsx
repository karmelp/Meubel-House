"use client"
import React, { useEffect } from 'react'
import './pagination.scss'

type Props = {
    currentPage: number;
    totalPages: number;
    onPageChange: (pageNumber: number) => void;
};

const Pagination = ({ currentPage, totalPages, onPageChange } : Props) => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    // Scroll to the top of the product grid when the page changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentPage]);

    return (
        <div className="pagination">
            {currentPage !== 1 && (
                <button onClick={() => onPageChange(currentPage - 1)}>
                    Previous
                </button>
            )}
            {pageNumbers.map((pageNumber) => (
                <button
                    key={pageNumber}
                    onClick={() => onPageChange(pageNumber)}
                    style={{
                        backgroundColor: currentPage === pageNumber ? '#FBEBB5' : '#FFF9E5',
                    }}>
                    {pageNumber}
                </button>
            ))}
            {currentPage !== totalPages && (
                <button onClick={() => onPageChange(currentPage + 1)}>
                    Next
                </button>
            )}
        </div>
    );
}

export default Pagination