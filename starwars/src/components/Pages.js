import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

const pageOne = 1;
const pageTwo = 2;
const pageThree = 3;
const pageFour = 4;
const pageFive = 5;

const Pages = props => {
  return (
    <Pagination
      size='lg'
      className='pt-4'
      aria-labal='Navigate to more characters'
    >
      <PaginationItem className='text-dark'>
        <PaginationLink first href='#' />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink previous href='#' />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href='#'>{pageOne}</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href='#'>{pageTwo}</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href='#'>{pageThree}</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href='#'>{pageFour}</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href='#'>{pageFive}</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink next href='#' />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink last href='#' />
      </PaginationItem>
    </Pagination>
  );
};

export default Pages;
