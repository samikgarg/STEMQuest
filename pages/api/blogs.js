import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    const filePath = path.join(process.cwd(), 'data', 'blogs.json');
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData);

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  
    if (req.method === 'GET') {
        res.status(200).json(data);
    } else if (req.method === 'POST') {
        const { id, title, text } = req.body;

        if(id === 'new'){
            const newId = data.blogs.length + 1;
            data.blogs.push({ id: newId, title, text });
        } else {
            const numericId = parseInt(id);
            const index = data.blogs.findIndex((blog) => blog.id === numericId);
            if (index > -1) {
                data.blogs[index].title = title;
                data.blogs[index].text = text;
            } else {
                res.status(404).send('Blog not found');
                return;
            }
        }
      
        fs.writeFileSync(filePath, JSON.stringify(data));
        res.status(200).send('Updated successfully');
    } else if (req.method === 'DELETE') {
        const blogId = req.query.id;

        if (!blogId) {
            res.status(400).send('Invalid request, missing id');
            return;
        }

        const numericId = parseInt(blogId);
        const index = data.blogs.findIndex((blog) => blog.id === numericId);
        if (index > -1) {
            data.blogs.splice(index, 1);
            fs.writeFileSync(filePath, JSON.stringify(data));
            res.status(200).send('Deleted successfully');
        } else {
            res.status(404).send('Blog not found');
        }
    } else {
        res.status(405).send(`Method ${req.method} Not Allowed`);
    }
}
