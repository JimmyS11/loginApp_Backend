'use strict'

const User = use('App/Models/User');

class UserController {
    async store({ request, response }) {
        try {
            const { email, password, nombre } = request.all();
            const user = await User.findOrCreate({
                email: email,
                password: password,
                username: nombre
            });
            return response.ok({ message: 'ok', user });
        } catch (e) {
            return response.internalServerError({ message: 'El correo o el nombre ya existen en nuestra base de datos' });
        }
    }
}

module.exports = UserController