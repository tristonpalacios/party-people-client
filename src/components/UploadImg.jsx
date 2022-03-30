import { useState } from "react"
import { Form, Row } from "react-bootstrap"

export default function UploadImg({
  currentUser,
  handleImgSubmit,
  setFormImg, imgForm,
  setImgForm,
}) {
  // const [formImg, setFormImg] = useState("")

  const [msg, setMsg] = useState("")

  return (
    <>
      <Form onSubmit={handleImgSubmit}>
        <Form.Group
          encType="multipart/form"
          // controlId="formFile"
          className="mb-3"
        >
          <Form.Label>add your picture here</Form.Label>
          <Form.Control
            type="file"
            // id="image"
            onChange={(e) => setFormImg(e.target.files[0])}
          />
          <input type="submit" />
        </Form.Group>
      </Form>
    </>
  )
}
