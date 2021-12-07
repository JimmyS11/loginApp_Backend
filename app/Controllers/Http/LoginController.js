'use strict'

const User = use('App/Models/User');

class LoginController {
    async login({ request, response, auth }) {
        try {
            const { email, password } = request.all();
            const token = await auth.attempt(email, password);
            const user = await User.query().where('email', email).first();

            return response.ok({ message: 'ok', token: token, user: user });

        } catch (e) {
            return response.internalServerError({ message: 'Correo o contraseña inválidos' });
        }
    }
}

module.exports = LoginController