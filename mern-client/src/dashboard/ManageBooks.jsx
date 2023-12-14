import React, { useEffect, useState } from "react";
import { Table } from "flowbite-react";
import { Link } from "react-router-dom";

const ManageBooks = () => {
  const [allBooks, setAllBooks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then((res) => res.json())
      .then((data) => setAllBooks(data));
  }, []);


  //delete book
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/book/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          // Successful deletion, no content to parse
          alert("Xoá thành công sách");
          return null;
        } else {
          // Handle other non-200 status codes
          return res.json();
        }
      })
      .then((data) => {
        if (data !== null) {
          console.log("Server response:", data);
        }
        // Update the book list after successful deletion
        setAllBooks((prevBooks) => prevBooks.filter((book) => book._id !== id));
      })
      
      .catch((error) => {
        console.error("Error:", error.message);
      });
  };
  

  return (
    <div className="px-4 my-12 overflow-x-hidden">
      <h2 className="mb-8 text-xl font-boild">Quản lí sách</h2>
      <div className="overflow-x-auto">
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell>Số thứ tự</Table.HeadCell>
            <Table.HeadCell>Tên sách</Table.HeadCell>
            <Table.HeadCell>Tác giả</Table.HeadCell>
            <Table.HeadCell>Danh mục</Table.HeadCell>
            <Table.HeadCell>Giá</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only"></span>
            </Table.HeadCell>
          </Table.Head>

          {allBooks.map((book, index) => (
            <Table.Body key={book._id} className="devide-y">
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell>{index + 1}</Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {book.bookTitle}
                </Table.Cell>
                <Table.Cell>{book.authorName} </Table.Cell>
                <Table.Cell>{book.categoryName}</Table.Cell>
                <Table.Cell>12.000vnđ</Table.Cell>

                <Table.Cell className="flex items-center gap-2" >
                  <Link
                    to={`/admin/dashboard/edit-book/${book._id}`}
                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    Chỉnh sửa
                  </Link>
                  <button onClick={() => handleDelete(book._id)} className="bg-red-600 text-white p-2">Xoá</button>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          ))}
        </Table>
      </div>
    </div>
  );
};

export default ManageBooks;
