import pool from "../database.js";

export const leadsController = {}

leadsController.bookClient = async (req, res) => {
    const { name, email, phone, date, service } = req.body;

    if (!name || !email) {
        return res.status(400).json({ error: 'Name and Email are required' });
    }

    const clientExistsQuery = 'SELECT client_id FROM clients WHERE email = $1';
    const insertClientQuery = 'INSERT INTO clients (name, email, phone_number) VALUES ($1, $2, $3) RETURNING client_id';
    const insertAppointmentQuery = 'INSERT INTO appointments (appointment_date, service, client_id) VALUES ($1, $2, $3) RETURNING *';

    try {
        //Date part:
        // Remove the AM/PM part and add a ":00" at the end to standardize the time format
        const [datePart, timePart] = date.split(' '); // Example: '2024-12-19 14:00 AM'
        const time = timePart.replace(/AM|PM/i, '') + ':00'; // Cut out AM/PM and add ":00"
        const timestamp = `${datePart} ${time}`;

        //Client part
        let clientResult;

        // Check if the client already exists
        clientResult = await pool.query(clientExistsQuery, [email]);

        let client_id;

        if (clientResult.rows.length > 0) {
            // Client exists; use their existing ID
            client_id = clientResult.rows[0].client_id;
        } else {
            // Client does not exist; create a new client
            const newClientResult = await pool.query(insertClientQuery, [name, email, phone]);
            client_id = newClientResult.rows[0].client_id;
        }

        // Now create the appointment with the obtained client_id
        const appointmentResult = await pool.query(insertAppointmentQuery, [timestamp, service, client_id]);

        res.status(200).json({ message: 'Form submitted successfully', appointment: appointmentResult.rows[0] });
    } catch (err) {
        console.error('Error processing request:', err);
        res.status(500).json({ error: 'Error processing your request' });
    }
};

leadsController.magnetLead = async (req, res) => {
    const { name, email, phone } = req.body;

    if (!name || !email) {
        return res.status(400).json({ error: 'Name and Email are required' });
    }

    try {
        const result = await pool.query(
            'INSERT INTO leads_magnet (name, email, phone) VALUES ($1, $2, $3) RETURNING *',
            [name, email, phone]
        );
        res.status(200).json({ message: 'Form submitted successfully', lead: result.rows[0] });
    } catch (err) {
        console.error('Error inserting lead data:', err);
        res.status(500).json({ error: 'Error processing your request' });
    }
}

leadsController.receiveMessageLead = async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email) {
        return res.status(400).json({ error: 'Name and Email are required' });
    }

    try {
        const result = await pool.query(
            'INSERT INTO leads_messages (name, email, message) VALUES ($1, $2, $3) RETURNING *',
            [name, email, message]
        );
        res.status(200).json({ message: 'Form submitted successfully', lead: result.rows[0] });
    } catch (err) {
        console.error('Error inserting lead data:', err);
        res.status(500).json({ error: 'Error processing your request' });
    }
}

leadsController.newsletterLead = async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ error: 'Name and Email are required' });
    }

    try {
        const result = await pool.query(
            'INSERT INTO leads_newsletter (email) VALUES ($1) RETURNING *',
            [email]
        );
        res.status(200).json({ message: 'Form submitted successfully', lead: result.rows[0] });
    } catch (err) {
        console.error('Error inserting lead data:', err);
        res.status(500).json({ error: 'Error processing your request' });
    }
}