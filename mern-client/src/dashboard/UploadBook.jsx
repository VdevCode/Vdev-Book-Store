import React, { useEffect, useState } from "react";
import {
  Button,
  Checkbox,
  Label,
  Select,
  TextInput,
  Textarea,
} from "flowbite-react";

import { MdDriveFileRenameOutline } from "react-icons/md";
import { TbBrandOauth } from "react-icons/tb";
import { MdAddLink } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import { TbFileDescription } from "react-icons/tb";

const UploadBook = () => {

  const bookCategories = ["Truyện tranh", "Truyện cười", "Truyện kinh dị"];

  const [selectedBook, setSelectedBook] = useState(bookCategories[0]);
  const handleChange = (e) => {
    setSelectedBook(e.target.value);
  };

  const handleBookSubmit = (e) =>{
    e.preventDefault()
    const form = e.target
    const bookTitle = form.bookTitle.value
    const authorName = form.authorName.value
    const imageURL = form.imageURL.value
    const categoryName = form.categoryName.value
    const bookDescription = form.bookDescription.value
    const bookPDFURL = form.bookPDFURL.value

    const bookObject = {
      bookTitle,authorName,imageURL,categoryName,bookDescription,bookPDFURL
    };

    if(bookObject == null){
      console.log("not gia tri");
    }
    else{
      fetch("http://localhost:5000/upload-book", 
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
          body: JSON.stringify(bookObject)
      })
      .then((res) => res.json() )
      .then((data) => {
        alert("Đăng tải sách thành công!"),
        form.reset()
      })
    }

  }



  return (
    <div className="px-4 my-12 z-0">
      <h2 className="mb-8 text-xl font-boild">Đăng sách</h2>

      <form onSubmit={handleBookSubmit} className="flex lg:w-[100%] flex-col flex-wrap gap-4">
        {/* form1 */}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Tên sách" />
            </div>
            <TextInput
              id="email1"
              type="text"
              name="bookTitle"
              placeholder="Ví dụ: Doraemon"
              icon={MdDriveFileRenameOutline}
              required
            />
          </div>
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Tên tác giả" />
            </div>
            <TextInput
              id="authorName"
              type="text"
              icon={TbBrandOauth}
              name="authorName"
              placeholder="Ví dụ: Kakashi"
              required
            />
          </div>
        </div>

        {/* form2 */}
        <div className="flex gap-8">
          <div className="w-full">
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Link ảnh" />
            </div>
            <TextInput
              id="imageURL"
              type="text"
              name="imageURL"
              icon={MdAddLink}
              placeholder="Ví dụ: http://localhost:5173/src/assets/avatar/avatar1.jpg"
              required
            />
          </div>
          <div className="w-full">
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Thể loại" />
            </div>
            <Select
              onClick={handleChange}
              id="inputState"
              name="categoryName"
              className=" rounded block w-full"
              value={selectedBook}
              icon={BiCategory}
            >
              {bookCategories.map((option, index) => (
                <option key={index}>{option}</option>
              ))}
            </Select>
          </div>
        </div>

        {/* form3 */}
        <div className="flex gap-8">
          <div className="w-full">
            <div className="mb-2 block">
              <Label htmlFor="bookDescription" value="Mô tả về sách" />
            </div>
            <Textarea
              id="bookDescription"
              type="text"
              name="bookDescription"
              placeholder="Ví dụ: Truyện Doraemon mô tả về tình bạn 5 người..."
              required
              rows={6}
              
            />
          </div>
        </div>

        {/* form4 */}
        <div className="flex gap-8">
          <div className="w-full">
            <div className="mb-2 block">
              <Label htmlFor="bookPDFURL" value="Link PDF(không bắt buộc)" />
            </div>
            <TextInput
              id="bookPDFURL"
              type="text"
              name="bookPDFURL"
              placeholder="Ví dụ: Đường dẫn file PDF"
              icon={TbFileDescription}
              // required
            />
          </div>
        </div>

        <Button className="bg-teal-400" type="submit">Đăng sách</Button>
      </form>
    </div>
  );
};

export default UploadBook;
