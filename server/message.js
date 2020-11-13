const accountSid = 'AC93cfe04f8b39f87a971b4cb1439d9d82'; 
const authToken = '37af3afca34c369e880ecb0176f99904'; 
const client = require('twilio')(accountSid, authToken); 
 
 
const sendMessage = async (req, res) => {
    try {
        
        const { number, message } = req.body;

        const response = await client.messages.create({
           body: message, 
           from: 'whatsapp:+14155238886', // El número que te proporcionen       
           to: `whatsapp:${number}`
        });

        console.log(response);

        res.json({
            msg: 'Mensaje enviado correctamente'
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error al enviar mensaje'
        });
    }
}

module.exports = sendMessage;