import { getDbConnection, findOneListingByName } from "../db";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const signUpRoute = {
    path: '/api/signup',
    method: 'post',
    handler: async (req, res) => {
        const {email, password} = req.body;
        let user;
        let db;
        try {
            console.log('DB connection');
            db = getDbConnection('sample_training');
            console.log('DB collection');
             // Make the appropriate DB calls
        await  listDatabases(client);
            // user = await db.collection('users').findOne({email});
        const user = await findOneListingByName(client, "ACMAR");
        console.log(user);

        } catch(err) {
            console.log('Error is: '+ err);
        }
        console.log('user'+ user)

        if(user) {
            res.sendStatus(409);
        }

        const passwordHash = await bcrypt.hash(password, 10);

        const startingInfo = {
            hairColor: '',
            favoriteFood: '',
            bio: ''
        };

        const result = await db.collection('users').insertOne({
            email,
            passwordHash,
            info: startingInfo,
            isVerified: false
        });

        const { insertedId } = result;

        jwt.sign({
            id: insertedId,
            email,
            info: startingInfo,
            isVerified: false
        }, process.env.JWT_SECRET,
        {
            expiresIn: '2d'
        }, 
        (err, token) => {
            if(err) {
                return res.status(500).send(err);
            }
            res.status(200).json({token});
        });
    }
}