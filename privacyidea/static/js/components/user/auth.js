/**
 * http://www.privacyidea.org
 * (c) cornelius kölbel, cornelius@privacyidea.org
 *
 * 2015-01-11 Cornelius Kölbel, <cornelius@privacyidea.org>
 *
 * This code is free software; you can redistribute it and/or
 * modify it under the terms of the GNU AFFERO GENERAL PUBLIC LICENSE
 * License as published by the Free Software Foundation; either
 * version 3 of the License, or any later version.
 *
 * This code is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU AFFERO GENERAL PUBLIC LICENSE for more details.
 *
 * You should have received a copy of the GNU Affero General Public
 * License along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 */
angular.module("privacyideaAuth", [])
    .factory("auth", function () {
        /*
        Each service - just like this service factory - is a singleton.
        Here we just store the username of the authenticated user and his
        auth_token.
         */
        var user = {};

        return {
            setUser: function (username, auth_token) {
                    user.username = username;
                    user.auth_token = auth_token;
            },
            dropUser: function () {
                    user = {};
            },
            getUser: function () {
                return user;
            },
            getAuthToken: function () {
                return user.auth_token;
            }
        }
    });