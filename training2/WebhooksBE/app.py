from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import pypdfium2 as pdfium
import os
import requests
                 
app = Flask(__name__)
CORS  (app)
webhook_url = "https://webhook.site/8c53ad79-fe1b-4bab-824c-c48a26e02b75"

@app.route("/")
def index():
    return render_template('upload.html')
  

@app.route('/webhook', methods=['POST'])
def webhook():
    # for file in os.listdir('./images'):
    #     if file.endswith(".jpg"):
    #         os.remove(os.path.join('./images', file))

    if 'file' not in request.files:
        return jsonify({"error": "No file path"})
    
    file = request.files['file']

    if file.filename == '':
        data_to_send ={"error": "No selected file"}
        response = requests.post(webhook_url, json=data_to_send)
        return jsonify({"error": "No selected file"})

    if file:
        pdf_path = './file/upload.pdf'
        file.save(pdf_path)

        pdf = pdfium.PdfDocument(pdf_path)
        for page_number in range(len(pdf)):
            page = pdf.get_page(page_number)
            bitmap = page.render(scale=1, rotation=0)
            pil_image = bitmap.to_pil()
            image_path = f"./images/Page_{page_number + 1}.jpg"
            pil_image.save(image_path, "JPEG")

        data_to_send = {"message": "PDF to image conversion complete"}

        response = requests.post(webhook_url, json=data_to_send)

        if response.status_code == 200:
            return jsonify({"message": "PDF to image conversion complete and JSON data sent to the Webhook"})
        else:
            return jsonify({"error": "Failed to send JSON data to the Webhook"})

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8000,debug=True)
