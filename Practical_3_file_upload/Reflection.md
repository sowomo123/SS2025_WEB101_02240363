# File Upload Implementation 
## 1. Documentation 
### Main concept applied 

1.  Disabling Next.js Body Parser
Next.js has a built-in body parser, which is not compatible with formidable (a Node.js module for parsing form data, especially file uploads). You need to disable it for the API route to handle multipart/form-data.

2. Using Formidable to Parse Form Data
formidable parses incoming requests with multipart/form-data. It extracts files and fields from the request.

3. File Handling
You typically:

Store the uploaded file in a directory.
Use fs.rename or fs.promises.rename to move it from the temp location to a target directory.
Ensure security (e.g., sanitizing filenames).

4. Security & Validation (Frontend & Backend)
Frontend:
Validate file type (e.g., image/jpeg, application/pdf) and size before uploading.
Backend:
Re-check file size and type in the server to prevent malicious uploads.

## 2.Reflection
# Discuss what you learned. 
# What I Learned

What I Learned
Through implementing the file upload functionality in a Next.js application, I gained valuable insights into both frontend and backend web development concepts:

1. Handling Multipart Form Data: I learned how standard body parsers in frameworks like Next.js do not support multipart/form-data, and how to use libraries like formidable to manually parse file uploads in API routes.

2. React Hook Form Integration: I discovered how to efficiently manage form state and validation in React using react-hook-form, which simplified the process of building and validating the file upload form.

3. File Validation: Implementing file size and type validation taught me the importance of validating user input both on the frontend for user experience and on the backend for security and integrity.

4. Drag and Drop UI with React Dropzone: Using react-dropzone provided a modern and intuitive way for users to upload files via drag-and-drop, enhancing the user experience of the application.

5. Upload Progress Tracking with Axios: I learned how to track upload progress using Axios's onUploadProgress callback, providing real-time feedback to users during the file upload process.

6. Security Considerations: I also became more aware of the security implications of file uploads, such as the risks of uploading executable or overly large files, and the need to sanitize and validate inputs carefully.

# Mention any challenges you faced (include screenshots) and how you overcame them.
Drag-and-Drop Styling and Integration
# Challenge:
Integrating react-dropzone with react-hook-form was initially confusing, especially in ensuring drag-and-drop functionality still captured file input correctly.

# Solution:
I wrapped the useDropzone logic inside a custom component and connected it to react-hook-form using setValue and watch.

![totoro](<post/Screenshot 2025-05-23 212901.png>)