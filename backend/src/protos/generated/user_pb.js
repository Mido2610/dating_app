/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.user = (function() {

    /**
     * Namespace user.
     * @exports user
     * @namespace
     */
    var user = {};

    user.User = (function() {

        /**
         * Properties of a User.
         * @memberof user
         * @interface IUser
         * @property {string|null} [id] User id
         * @property {string|null} [email] User email
         * @property {string|null} [password] User password
         * @property {string|null} [fullName] User fullName
         * @property {string|null} [gender] User gender
         * @property {number|Long|null} [birthday] User birthday
         * @property {Array.<string>|null} [interests] User interests
         * @property {Array.<string>|null} [photos] User photos
         */

        /**
         * Constructs a new User.
         * @memberof user
         * @classdesc Represents a User.
         * @implements IUser
         * @constructor
         * @param {user.IUser=} [properties] Properties to set
         */
        function User(properties) {
            this.interests = [];
            this.photos = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * User id.
         * @member {string} id
         * @memberof user.User
         * @instance
         */
        User.prototype.id = "";

        /**
         * User email.
         * @member {string} email
         * @memberof user.User
         * @instance
         */
        User.prototype.email = "";

        /**
         * User password.
         * @member {string} password
         * @memberof user.User
         * @instance
         */
        User.prototype.password = "";

        /**
         * User fullName.
         * @member {string} fullName
         * @memberof user.User
         * @instance
         */
        User.prototype.fullName = "";

        /**
         * User gender.
         * @member {string} gender
         * @memberof user.User
         * @instance
         */
        User.prototype.gender = "";

        /**
         * User birthday.
         * @member {number|Long} birthday
         * @memberof user.User
         * @instance
         */
        User.prototype.birthday = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * User interests.
         * @member {Array.<string>} interests
         * @memberof user.User
         * @instance
         */
        User.prototype.interests = $util.emptyArray;

        /**
         * User photos.
         * @member {Array.<string>} photos
         * @memberof user.User
         * @instance
         */
        User.prototype.photos = $util.emptyArray;

        /**
         * Creates a new User instance using the specified properties.
         * @function create
         * @memberof user.User
         * @static
         * @param {user.IUser=} [properties] Properties to set
         * @returns {user.User} User instance
         */
        User.create = function create(properties) {
            return new User(properties);
        };

        /**
         * Encodes the specified User message. Does not implicitly {@link user.User.verify|verify} messages.
         * @function encode
         * @memberof user.User
         * @static
         * @param {user.IUser} message User message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        User.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.email != null && Object.hasOwnProperty.call(message, "email"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.email);
            if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.password);
            if (message.fullName != null && Object.hasOwnProperty.call(message, "fullName"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.fullName);
            if (message.gender != null && Object.hasOwnProperty.call(message, "gender"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.gender);
            if (message.birthday != null && Object.hasOwnProperty.call(message, "birthday"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.birthday);
            if (message.interests != null && message.interests.length)
                for (var i = 0; i < message.interests.length; ++i)
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.interests[i]);
            if (message.photos != null && message.photos.length)
                for (var i = 0; i < message.photos.length; ++i)
                    writer.uint32(/* id 8, wireType 2 =*/66).string(message.photos[i]);
            return writer;
        };

        /**
         * Encodes the specified User message, length delimited. Does not implicitly {@link user.User.verify|verify} messages.
         * @function encodeDelimited
         * @memberof user.User
         * @static
         * @param {user.IUser} message User message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        User.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a User message from the specified reader or buffer.
         * @function decode
         * @memberof user.User
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {user.User} User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        User.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.user.User();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                case 2: {
                        message.email = reader.string();
                        break;
                    }
                case 3: {
                        message.password = reader.string();
                        break;
                    }
                case 4: {
                        message.fullName = reader.string();
                        break;
                    }
                case 5: {
                        message.gender = reader.string();
                        break;
                    }
                case 6: {
                        message.birthday = reader.int64();
                        break;
                    }
                case 7: {
                        if (!(message.interests && message.interests.length))
                            message.interests = [];
                        message.interests.push(reader.string());
                        break;
                    }
                case 8: {
                        if (!(message.photos && message.photos.length))
                            message.photos = [];
                        message.photos.push(reader.string());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a User message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof user.User
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {user.User} User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        User.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a User message.
         * @function verify
         * @memberof user.User
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        User.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.email != null && message.hasOwnProperty("email"))
                if (!$util.isString(message.email))
                    return "email: string expected";
            if (message.password != null && message.hasOwnProperty("password"))
                if (!$util.isString(message.password))
                    return "password: string expected";
            if (message.fullName != null && message.hasOwnProperty("fullName"))
                if (!$util.isString(message.fullName))
                    return "fullName: string expected";
            if (message.gender != null && message.hasOwnProperty("gender"))
                if (!$util.isString(message.gender))
                    return "gender: string expected";
            if (message.birthday != null && message.hasOwnProperty("birthday"))
                if (!$util.isInteger(message.birthday) && !(message.birthday && $util.isInteger(message.birthday.low) && $util.isInteger(message.birthday.high)))
                    return "birthday: integer|Long expected";
            if (message.interests != null && message.hasOwnProperty("interests")) {
                if (!Array.isArray(message.interests))
                    return "interests: array expected";
                for (var i = 0; i < message.interests.length; ++i)
                    if (!$util.isString(message.interests[i]))
                        return "interests: string[] expected";
            }
            if (message.photos != null && message.hasOwnProperty("photos")) {
                if (!Array.isArray(message.photos))
                    return "photos: array expected";
                for (var i = 0; i < message.photos.length; ++i)
                    if (!$util.isString(message.photos[i]))
                        return "photos: string[] expected";
            }
            return null;
        };

        /**
         * Creates a User message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.User
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.User} User
         */
        User.fromObject = function fromObject(object) {
            if (object instanceof $root.user.User)
                return object;
            var message = new $root.user.User();
            if (object.id != null)
                message.id = String(object.id);
            if (object.email != null)
                message.email = String(object.email);
            if (object.password != null)
                message.password = String(object.password);
            if (object.fullName != null)
                message.fullName = String(object.fullName);
            if (object.gender != null)
                message.gender = String(object.gender);
            if (object.birthday != null)
                if ($util.Long)
                    (message.birthday = $util.Long.fromValue(object.birthday)).unsigned = false;
                else if (typeof object.birthday === "string")
                    message.birthday = parseInt(object.birthday, 10);
                else if (typeof object.birthday === "number")
                    message.birthday = object.birthday;
                else if (typeof object.birthday === "object")
                    message.birthday = new $util.LongBits(object.birthday.low >>> 0, object.birthday.high >>> 0).toNumber();
            if (object.interests) {
                if (!Array.isArray(object.interests))
                    throw TypeError(".user.User.interests: array expected");
                message.interests = [];
                for (var i = 0; i < object.interests.length; ++i)
                    message.interests[i] = String(object.interests[i]);
            }
            if (object.photos) {
                if (!Array.isArray(object.photos))
                    throw TypeError(".user.User.photos: array expected");
                message.photos = [];
                for (var i = 0; i < object.photos.length; ++i)
                    message.photos[i] = String(object.photos[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a User message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.User
         * @static
         * @param {user.User} message User
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        User.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.interests = [];
                object.photos = [];
            }
            if (options.defaults) {
                object.id = "";
                object.email = "";
                object.password = "";
                object.fullName = "";
                object.gender = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.birthday = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.birthday = options.longs === String ? "0" : 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.email != null && message.hasOwnProperty("email"))
                object.email = message.email;
            if (message.password != null && message.hasOwnProperty("password"))
                object.password = message.password;
            if (message.fullName != null && message.hasOwnProperty("fullName"))
                object.fullName = message.fullName;
            if (message.gender != null && message.hasOwnProperty("gender"))
                object.gender = message.gender;
            if (message.birthday != null && message.hasOwnProperty("birthday"))
                if (typeof message.birthday === "number")
                    object.birthday = options.longs === String ? String(message.birthday) : message.birthday;
                else
                    object.birthday = options.longs === String ? $util.Long.prototype.toString.call(message.birthday) : options.longs === Number ? new $util.LongBits(message.birthday.low >>> 0, message.birthday.high >>> 0).toNumber() : message.birthday;
            if (message.interests && message.interests.length) {
                object.interests = [];
                for (var j = 0; j < message.interests.length; ++j)
                    object.interests[j] = message.interests[j];
            }
            if (message.photos && message.photos.length) {
                object.photos = [];
                for (var j = 0; j < message.photos.length; ++j)
                    object.photos[j] = message.photos[j];
            }
            return object;
        };

        /**
         * Converts this User to JSON.
         * @function toJSON
         * @memberof user.User
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        User.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for User
         * @function getTypeUrl
         * @memberof user.User
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        User.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/user.User";
        };

        return User;
    })();

    user.AccessToken = (function() {

        /**
         * Properties of an AccessToken.
         * @memberof user
         * @interface IAccessToken
         * @property {string|null} [token] AccessToken token
         * @property {string|null} [expiresAt] AccessToken expiresAt
         */

        /**
         * Constructs a new AccessToken.
         * @memberof user
         * @classdesc Represents an AccessToken.
         * @implements IAccessToken
         * @constructor
         * @param {user.IAccessToken=} [properties] Properties to set
         */
        function AccessToken(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AccessToken token.
         * @member {string} token
         * @memberof user.AccessToken
         * @instance
         */
        AccessToken.prototype.token = "";

        /**
         * AccessToken expiresAt.
         * @member {string} expiresAt
         * @memberof user.AccessToken
         * @instance
         */
        AccessToken.prototype.expiresAt = "";

        /**
         * Creates a new AccessToken instance using the specified properties.
         * @function create
         * @memberof user.AccessToken
         * @static
         * @param {user.IAccessToken=} [properties] Properties to set
         * @returns {user.AccessToken} AccessToken instance
         */
        AccessToken.create = function create(properties) {
            return new AccessToken(properties);
        };

        /**
         * Encodes the specified AccessToken message. Does not implicitly {@link user.AccessToken.verify|verify} messages.
         * @function encode
         * @memberof user.AccessToken
         * @static
         * @param {user.IAccessToken} message AccessToken message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AccessToken.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.token);
            if (message.expiresAt != null && Object.hasOwnProperty.call(message, "expiresAt"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.expiresAt);
            return writer;
        };

        /**
         * Encodes the specified AccessToken message, length delimited. Does not implicitly {@link user.AccessToken.verify|verify} messages.
         * @function encodeDelimited
         * @memberof user.AccessToken
         * @static
         * @param {user.IAccessToken} message AccessToken message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AccessToken.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AccessToken message from the specified reader or buffer.
         * @function decode
         * @memberof user.AccessToken
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {user.AccessToken} AccessToken
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AccessToken.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.user.AccessToken();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.token = reader.string();
                        break;
                    }
                case 2: {
                        message.expiresAt = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AccessToken message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof user.AccessToken
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {user.AccessToken} AccessToken
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AccessToken.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AccessToken message.
         * @function verify
         * @memberof user.AccessToken
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AccessToken.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.token != null && message.hasOwnProperty("token"))
                if (!$util.isString(message.token))
                    return "token: string expected";
            if (message.expiresAt != null && message.hasOwnProperty("expiresAt"))
                if (!$util.isString(message.expiresAt))
                    return "expiresAt: string expected";
            return null;
        };

        /**
         * Creates an AccessToken message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.AccessToken
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.AccessToken} AccessToken
         */
        AccessToken.fromObject = function fromObject(object) {
            if (object instanceof $root.user.AccessToken)
                return object;
            var message = new $root.user.AccessToken();
            if (object.token != null)
                message.token = String(object.token);
            if (object.expiresAt != null)
                message.expiresAt = String(object.expiresAt);
            return message;
        };

        /**
         * Creates a plain object from an AccessToken message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.AccessToken
         * @static
         * @param {user.AccessToken} message AccessToken
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AccessToken.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.token = "";
                object.expiresAt = "";
            }
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = message.token;
            if (message.expiresAt != null && message.hasOwnProperty("expiresAt"))
                object.expiresAt = message.expiresAt;
            return object;
        };

        /**
         * Converts this AccessToken to JSON.
         * @function toJSON
         * @memberof user.AccessToken
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AccessToken.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AccessToken
         * @function getTypeUrl
         * @memberof user.AccessToken
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AccessToken.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/user.AccessToken";
        };

        return AccessToken;
    })();

    user.LoginRequest = (function() {

        /**
         * Properties of a LoginRequest.
         * @memberof user
         * @interface ILoginRequest
         * @property {string|null} [email] LoginRequest email
         * @property {string|null} [password] LoginRequest password
         */

        /**
         * Constructs a new LoginRequest.
         * @memberof user
         * @classdesc Represents a LoginRequest.
         * @implements ILoginRequest
         * @constructor
         * @param {user.ILoginRequest=} [properties] Properties to set
         */
        function LoginRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginRequest email.
         * @member {string} email
         * @memberof user.LoginRequest
         * @instance
         */
        LoginRequest.prototype.email = "";

        /**
         * LoginRequest password.
         * @member {string} password
         * @memberof user.LoginRequest
         * @instance
         */
        LoginRequest.prototype.password = "";

        /**
         * Creates a new LoginRequest instance using the specified properties.
         * @function create
         * @memberof user.LoginRequest
         * @static
         * @param {user.ILoginRequest=} [properties] Properties to set
         * @returns {user.LoginRequest} LoginRequest instance
         */
        LoginRequest.create = function create(properties) {
            return new LoginRequest(properties);
        };

        /**
         * Encodes the specified LoginRequest message. Does not implicitly {@link user.LoginRequest.verify|verify} messages.
         * @function encode
         * @memberof user.LoginRequest
         * @static
         * @param {user.ILoginRequest} message LoginRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.email != null && Object.hasOwnProperty.call(message, "email"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.email);
            if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
            return writer;
        };

        /**
         * Encodes the specified LoginRequest message, length delimited. Does not implicitly {@link user.LoginRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof user.LoginRequest
         * @static
         * @param {user.ILoginRequest} message LoginRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginRequest message from the specified reader or buffer.
         * @function decode
         * @memberof user.LoginRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {user.LoginRequest} LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginRequest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.user.LoginRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.email = reader.string();
                        break;
                    }
                case 2: {
                        message.password = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LoginRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof user.LoginRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {user.LoginRequest} LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginRequest message.
         * @function verify
         * @memberof user.LoginRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.email != null && message.hasOwnProperty("email"))
                if (!$util.isString(message.email))
                    return "email: string expected";
            if (message.password != null && message.hasOwnProperty("password"))
                if (!$util.isString(message.password))
                    return "password: string expected";
            return null;
        };

        /**
         * Creates a LoginRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.LoginRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.LoginRequest} LoginRequest
         */
        LoginRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.user.LoginRequest)
                return object;
            var message = new $root.user.LoginRequest();
            if (object.email != null)
                message.email = String(object.email);
            if (object.password != null)
                message.password = String(object.password);
            return message;
        };

        /**
         * Creates a plain object from a LoginRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.LoginRequest
         * @static
         * @param {user.LoginRequest} message LoginRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.email = "";
                object.password = "";
            }
            if (message.email != null && message.hasOwnProperty("email"))
                object.email = message.email;
            if (message.password != null && message.hasOwnProperty("password"))
                object.password = message.password;
            return object;
        };

        /**
         * Converts this LoginRequest to JSON.
         * @function toJSON
         * @memberof user.LoginRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for LoginRequest
         * @function getTypeUrl
         * @memberof user.LoginRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        LoginRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/user.LoginRequest";
        };

        return LoginRequest;
    })();

    user.LoginResponse = (function() {

        /**
         * Properties of a LoginResponse.
         * @memberof user
         * @interface ILoginResponse
         * @property {number|null} [code] LoginResponse code
         * @property {string|null} [message] LoginResponse message
         * @property {user.ILoginResponseResult|null} [loginResult] LoginResponse loginResult
         */

        /**
         * Constructs a new LoginResponse.
         * @memberof user
         * @classdesc Represents a LoginResponse.
         * @implements ILoginResponse
         * @constructor
         * @param {user.ILoginResponse=} [properties] Properties to set
         */
        function LoginResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginResponse code.
         * @member {number} code
         * @memberof user.LoginResponse
         * @instance
         */
        LoginResponse.prototype.code = 0;

        /**
         * LoginResponse message.
         * @member {string} message
         * @memberof user.LoginResponse
         * @instance
         */
        LoginResponse.prototype.message = "";

        /**
         * LoginResponse loginResult.
         * @member {user.ILoginResponseResult|null|undefined} loginResult
         * @memberof user.LoginResponse
         * @instance
         */
        LoginResponse.prototype.loginResult = null;

        /**
         * Creates a new LoginResponse instance using the specified properties.
         * @function create
         * @memberof user.LoginResponse
         * @static
         * @param {user.ILoginResponse=} [properties] Properties to set
         * @returns {user.LoginResponse} LoginResponse instance
         */
        LoginResponse.create = function create(properties) {
            return new LoginResponse(properties);
        };

        /**
         * Encodes the specified LoginResponse message. Does not implicitly {@link user.LoginResponse.verify|verify} messages.
         * @function encode
         * @memberof user.LoginResponse
         * @static
         * @param {user.ILoginResponse} message LoginResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
            if (message.loginResult != null && Object.hasOwnProperty.call(message, "loginResult"))
                $root.user.LoginResponseResult.encode(message.loginResult, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified LoginResponse message, length delimited. Does not implicitly {@link user.LoginResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof user.LoginResponse
         * @static
         * @param {user.ILoginResponse} message LoginResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginResponse message from the specified reader or buffer.
         * @function decode
         * @memberof user.LoginResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {user.LoginResponse} LoginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginResponse.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.user.LoginResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.int32();
                        break;
                    }
                case 2: {
                        message.message = reader.string();
                        break;
                    }
                case 3: {
                        message.loginResult = $root.user.LoginResponseResult.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LoginResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof user.LoginResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {user.LoginResponse} LoginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginResponse message.
         * @function verify
         * @memberof user.LoginResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            if (message.loginResult != null && message.hasOwnProperty("loginResult")) {
                var error = $root.user.LoginResponseResult.verify(message.loginResult);
                if (error)
                    return "loginResult." + error;
            }
            return null;
        };

        /**
         * Creates a LoginResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.LoginResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.LoginResponse} LoginResponse
         */
        LoginResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.user.LoginResponse)
                return object;
            var message = new $root.user.LoginResponse();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.message != null)
                message.message = String(object.message);
            if (object.loginResult != null) {
                if (typeof object.loginResult !== "object")
                    throw TypeError(".user.LoginResponse.loginResult: object expected");
                message.loginResult = $root.user.LoginResponseResult.fromObject(object.loginResult);
            }
            return message;
        };

        /**
         * Creates a plain object from a LoginResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.LoginResponse
         * @static
         * @param {user.LoginResponse} message LoginResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.code = 0;
                object.message = "";
                object.loginResult = null;
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            if (message.loginResult != null && message.hasOwnProperty("loginResult"))
                object.loginResult = $root.user.LoginResponseResult.toObject(message.loginResult, options);
            return object;
        };

        /**
         * Converts this LoginResponse to JSON.
         * @function toJSON
         * @memberof user.LoginResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for LoginResponse
         * @function getTypeUrl
         * @memberof user.LoginResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        LoginResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/user.LoginResponse";
        };

        return LoginResponse;
    })();

    user.LoginResponseResult = (function() {

        /**
         * Properties of a LoginResponseResult.
         * @memberof user
         * @interface ILoginResponseResult
         * @property {user.IUser|null} [user] LoginResponseResult user
         * @property {user.IAccessToken|null} [accessToken] LoginResponseResult accessToken
         */

        /**
         * Constructs a new LoginResponseResult.
         * @memberof user
         * @classdesc Represents a LoginResponseResult.
         * @implements ILoginResponseResult
         * @constructor
         * @param {user.ILoginResponseResult=} [properties] Properties to set
         */
        function LoginResponseResult(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginResponseResult user.
         * @member {user.IUser|null|undefined} user
         * @memberof user.LoginResponseResult
         * @instance
         */
        LoginResponseResult.prototype.user = null;

        /**
         * LoginResponseResult accessToken.
         * @member {user.IAccessToken|null|undefined} accessToken
         * @memberof user.LoginResponseResult
         * @instance
         */
        LoginResponseResult.prototype.accessToken = null;

        /**
         * Creates a new LoginResponseResult instance using the specified properties.
         * @function create
         * @memberof user.LoginResponseResult
         * @static
         * @param {user.ILoginResponseResult=} [properties] Properties to set
         * @returns {user.LoginResponseResult} LoginResponseResult instance
         */
        LoginResponseResult.create = function create(properties) {
            return new LoginResponseResult(properties);
        };

        /**
         * Encodes the specified LoginResponseResult message. Does not implicitly {@link user.LoginResponseResult.verify|verify} messages.
         * @function encode
         * @memberof user.LoginResponseResult
         * @static
         * @param {user.ILoginResponseResult} message LoginResponseResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginResponseResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.user != null && Object.hasOwnProperty.call(message, "user"))
                $root.user.User.encode(message.user, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.accessToken != null && Object.hasOwnProperty.call(message, "accessToken"))
                $root.user.AccessToken.encode(message.accessToken, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified LoginResponseResult message, length delimited. Does not implicitly {@link user.LoginResponseResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof user.LoginResponseResult
         * @static
         * @param {user.ILoginResponseResult} message LoginResponseResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginResponseResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginResponseResult message from the specified reader or buffer.
         * @function decode
         * @memberof user.LoginResponseResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {user.LoginResponseResult} LoginResponseResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginResponseResult.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.user.LoginResponseResult();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.user = $root.user.User.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.accessToken = $root.user.AccessToken.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LoginResponseResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof user.LoginResponseResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {user.LoginResponseResult} LoginResponseResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginResponseResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginResponseResult message.
         * @function verify
         * @memberof user.LoginResponseResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginResponseResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.user != null && message.hasOwnProperty("user")) {
                var error = $root.user.User.verify(message.user);
                if (error)
                    return "user." + error;
            }
            if (message.accessToken != null && message.hasOwnProperty("accessToken")) {
                var error = $root.user.AccessToken.verify(message.accessToken);
                if (error)
                    return "accessToken." + error;
            }
            return null;
        };

        /**
         * Creates a LoginResponseResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.LoginResponseResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.LoginResponseResult} LoginResponseResult
         */
        LoginResponseResult.fromObject = function fromObject(object) {
            if (object instanceof $root.user.LoginResponseResult)
                return object;
            var message = new $root.user.LoginResponseResult();
            if (object.user != null) {
                if (typeof object.user !== "object")
                    throw TypeError(".user.LoginResponseResult.user: object expected");
                message.user = $root.user.User.fromObject(object.user);
            }
            if (object.accessToken != null) {
                if (typeof object.accessToken !== "object")
                    throw TypeError(".user.LoginResponseResult.accessToken: object expected");
                message.accessToken = $root.user.AccessToken.fromObject(object.accessToken);
            }
            return message;
        };

        /**
         * Creates a plain object from a LoginResponseResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.LoginResponseResult
         * @static
         * @param {user.LoginResponseResult} message LoginResponseResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginResponseResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.user = null;
                object.accessToken = null;
            }
            if (message.user != null && message.hasOwnProperty("user"))
                object.user = $root.user.User.toObject(message.user, options);
            if (message.accessToken != null && message.hasOwnProperty("accessToken"))
                object.accessToken = $root.user.AccessToken.toObject(message.accessToken, options);
            return object;
        };

        /**
         * Converts this LoginResponseResult to JSON.
         * @function toJSON
         * @memberof user.LoginResponseResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginResponseResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for LoginResponseResult
         * @function getTypeUrl
         * @memberof user.LoginResponseResult
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        LoginResponseResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/user.LoginResponseResult";
        };

        return LoginResponseResult;
    })();

    user.RegisterRequest = (function() {

        /**
         * Properties of a RegisterRequest.
         * @memberof user
         * @interface IRegisterRequest
         * @property {string|null} [email] RegisterRequest email
         * @property {string|null} [password] RegisterRequest password
         * @property {string|null} [fullName] RegisterRequest fullName
         * @property {string|null} [gender] RegisterRequest gender
         * @property {number|Long|null} [birthday] RegisterRequest birthday
         * @property {Array.<string>|null} [interests] RegisterRequest interests
         * @property {Array.<string>|null} [photos] RegisterRequest photos
         */

        /**
         * Constructs a new RegisterRequest.
         * @memberof user
         * @classdesc Represents a RegisterRequest.
         * @implements IRegisterRequest
         * @constructor
         * @param {user.IRegisterRequest=} [properties] Properties to set
         */
        function RegisterRequest(properties) {
            this.interests = [];
            this.photos = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RegisterRequest email.
         * @member {string} email
         * @memberof user.RegisterRequest
         * @instance
         */
        RegisterRequest.prototype.email = "";

        /**
         * RegisterRequest password.
         * @member {string} password
         * @memberof user.RegisterRequest
         * @instance
         */
        RegisterRequest.prototype.password = "";

        /**
         * RegisterRequest fullName.
         * @member {string} fullName
         * @memberof user.RegisterRequest
         * @instance
         */
        RegisterRequest.prototype.fullName = "";

        /**
         * RegisterRequest gender.
         * @member {string} gender
         * @memberof user.RegisterRequest
         * @instance
         */
        RegisterRequest.prototype.gender = "";

        /**
         * RegisterRequest birthday.
         * @member {number|Long} birthday
         * @memberof user.RegisterRequest
         * @instance
         */
        RegisterRequest.prototype.birthday = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RegisterRequest interests.
         * @member {Array.<string>} interests
         * @memberof user.RegisterRequest
         * @instance
         */
        RegisterRequest.prototype.interests = $util.emptyArray;

        /**
         * RegisterRequest photos.
         * @member {Array.<string>} photos
         * @memberof user.RegisterRequest
         * @instance
         */
        RegisterRequest.prototype.photos = $util.emptyArray;

        /**
         * Creates a new RegisterRequest instance using the specified properties.
         * @function create
         * @memberof user.RegisterRequest
         * @static
         * @param {user.IRegisterRequest=} [properties] Properties to set
         * @returns {user.RegisterRequest} RegisterRequest instance
         */
        RegisterRequest.create = function create(properties) {
            return new RegisterRequest(properties);
        };

        /**
         * Encodes the specified RegisterRequest message. Does not implicitly {@link user.RegisterRequest.verify|verify} messages.
         * @function encode
         * @memberof user.RegisterRequest
         * @static
         * @param {user.IRegisterRequest} message RegisterRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RegisterRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.email != null && Object.hasOwnProperty.call(message, "email"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.email);
            if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
            if (message.fullName != null && Object.hasOwnProperty.call(message, "fullName"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.fullName);
            if (message.gender != null && Object.hasOwnProperty.call(message, "gender"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.gender);
            if (message.birthday != null && Object.hasOwnProperty.call(message, "birthday"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.birthday);
            if (message.interests != null && message.interests.length)
                for (var i = 0; i < message.interests.length; ++i)
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.interests[i]);
            if (message.photos != null && message.photos.length)
                for (var i = 0; i < message.photos.length; ++i)
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.photos[i]);
            return writer;
        };

        /**
         * Encodes the specified RegisterRequest message, length delimited. Does not implicitly {@link user.RegisterRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof user.RegisterRequest
         * @static
         * @param {user.IRegisterRequest} message RegisterRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RegisterRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RegisterRequest message from the specified reader or buffer.
         * @function decode
         * @memberof user.RegisterRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {user.RegisterRequest} RegisterRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RegisterRequest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.user.RegisterRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.email = reader.string();
                        break;
                    }
                case 2: {
                        message.password = reader.string();
                        break;
                    }
                case 3: {
                        message.fullName = reader.string();
                        break;
                    }
                case 4: {
                        message.gender = reader.string();
                        break;
                    }
                case 5: {
                        message.birthday = reader.int64();
                        break;
                    }
                case 6: {
                        if (!(message.interests && message.interests.length))
                            message.interests = [];
                        message.interests.push(reader.string());
                        break;
                    }
                case 7: {
                        if (!(message.photos && message.photos.length))
                            message.photos = [];
                        message.photos.push(reader.string());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RegisterRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof user.RegisterRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {user.RegisterRequest} RegisterRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RegisterRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RegisterRequest message.
         * @function verify
         * @memberof user.RegisterRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RegisterRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.email != null && message.hasOwnProperty("email"))
                if (!$util.isString(message.email))
                    return "email: string expected";
            if (message.password != null && message.hasOwnProperty("password"))
                if (!$util.isString(message.password))
                    return "password: string expected";
            if (message.fullName != null && message.hasOwnProperty("fullName"))
                if (!$util.isString(message.fullName))
                    return "fullName: string expected";
            if (message.gender != null && message.hasOwnProperty("gender"))
                if (!$util.isString(message.gender))
                    return "gender: string expected";
            if (message.birthday != null && message.hasOwnProperty("birthday"))
                if (!$util.isInteger(message.birthday) && !(message.birthday && $util.isInteger(message.birthday.low) && $util.isInteger(message.birthday.high)))
                    return "birthday: integer|Long expected";
            if (message.interests != null && message.hasOwnProperty("interests")) {
                if (!Array.isArray(message.interests))
                    return "interests: array expected";
                for (var i = 0; i < message.interests.length; ++i)
                    if (!$util.isString(message.interests[i]))
                        return "interests: string[] expected";
            }
            if (message.photos != null && message.hasOwnProperty("photos")) {
                if (!Array.isArray(message.photos))
                    return "photos: array expected";
                for (var i = 0; i < message.photos.length; ++i)
                    if (!$util.isString(message.photos[i]))
                        return "photos: string[] expected";
            }
            return null;
        };

        /**
         * Creates a RegisterRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.RegisterRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.RegisterRequest} RegisterRequest
         */
        RegisterRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.user.RegisterRequest)
                return object;
            var message = new $root.user.RegisterRequest();
            if (object.email != null)
                message.email = String(object.email);
            if (object.password != null)
                message.password = String(object.password);
            if (object.fullName != null)
                message.fullName = String(object.fullName);
            if (object.gender != null)
                message.gender = String(object.gender);
            if (object.birthday != null)
                if ($util.Long)
                    (message.birthday = $util.Long.fromValue(object.birthday)).unsigned = false;
                else if (typeof object.birthday === "string")
                    message.birthday = parseInt(object.birthday, 10);
                else if (typeof object.birthday === "number")
                    message.birthday = object.birthday;
                else if (typeof object.birthday === "object")
                    message.birthday = new $util.LongBits(object.birthday.low >>> 0, object.birthday.high >>> 0).toNumber();
            if (object.interests) {
                if (!Array.isArray(object.interests))
                    throw TypeError(".user.RegisterRequest.interests: array expected");
                message.interests = [];
                for (var i = 0; i < object.interests.length; ++i)
                    message.interests[i] = String(object.interests[i]);
            }
            if (object.photos) {
                if (!Array.isArray(object.photos))
                    throw TypeError(".user.RegisterRequest.photos: array expected");
                message.photos = [];
                for (var i = 0; i < object.photos.length; ++i)
                    message.photos[i] = String(object.photos[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a RegisterRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.RegisterRequest
         * @static
         * @param {user.RegisterRequest} message RegisterRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RegisterRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.interests = [];
                object.photos = [];
            }
            if (options.defaults) {
                object.email = "";
                object.password = "";
                object.fullName = "";
                object.gender = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.birthday = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.birthday = options.longs === String ? "0" : 0;
            }
            if (message.email != null && message.hasOwnProperty("email"))
                object.email = message.email;
            if (message.password != null && message.hasOwnProperty("password"))
                object.password = message.password;
            if (message.fullName != null && message.hasOwnProperty("fullName"))
                object.fullName = message.fullName;
            if (message.gender != null && message.hasOwnProperty("gender"))
                object.gender = message.gender;
            if (message.birthday != null && message.hasOwnProperty("birthday"))
                if (typeof message.birthday === "number")
                    object.birthday = options.longs === String ? String(message.birthday) : message.birthday;
                else
                    object.birthday = options.longs === String ? $util.Long.prototype.toString.call(message.birthday) : options.longs === Number ? new $util.LongBits(message.birthday.low >>> 0, message.birthday.high >>> 0).toNumber() : message.birthday;
            if (message.interests && message.interests.length) {
                object.interests = [];
                for (var j = 0; j < message.interests.length; ++j)
                    object.interests[j] = message.interests[j];
            }
            if (message.photos && message.photos.length) {
                object.photos = [];
                for (var j = 0; j < message.photos.length; ++j)
                    object.photos[j] = message.photos[j];
            }
            return object;
        };

        /**
         * Converts this RegisterRequest to JSON.
         * @function toJSON
         * @memberof user.RegisterRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RegisterRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RegisterRequest
         * @function getTypeUrl
         * @memberof user.RegisterRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RegisterRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/user.RegisterRequest";
        };

        return RegisterRequest;
    })();

    user.RegisterResponse = (function() {

        /**
         * Properties of a RegisterResponse.
         * @memberof user
         * @interface IRegisterResponse
         * @property {number|null} [code] RegisterResponse code
         * @property {string|null} [message] RegisterResponse message
         * @property {user.IUser|null} [user] RegisterResponse user
         */

        /**
         * Constructs a new RegisterResponse.
         * @memberof user
         * @classdesc Represents a RegisterResponse.
         * @implements IRegisterResponse
         * @constructor
         * @param {user.IRegisterResponse=} [properties] Properties to set
         */
        function RegisterResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RegisterResponse code.
         * @member {number} code
         * @memberof user.RegisterResponse
         * @instance
         */
        RegisterResponse.prototype.code = 0;

        /**
         * RegisterResponse message.
         * @member {string} message
         * @memberof user.RegisterResponse
         * @instance
         */
        RegisterResponse.prototype.message = "";

        /**
         * RegisterResponse user.
         * @member {user.IUser|null|undefined} user
         * @memberof user.RegisterResponse
         * @instance
         */
        RegisterResponse.prototype.user = null;

        /**
         * Creates a new RegisterResponse instance using the specified properties.
         * @function create
         * @memberof user.RegisterResponse
         * @static
         * @param {user.IRegisterResponse=} [properties] Properties to set
         * @returns {user.RegisterResponse} RegisterResponse instance
         */
        RegisterResponse.create = function create(properties) {
            return new RegisterResponse(properties);
        };

        /**
         * Encodes the specified RegisterResponse message. Does not implicitly {@link user.RegisterResponse.verify|verify} messages.
         * @function encode
         * @memberof user.RegisterResponse
         * @static
         * @param {user.IRegisterResponse} message RegisterResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RegisterResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
            if (message.user != null && Object.hasOwnProperty.call(message, "user"))
                $root.user.User.encode(message.user, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RegisterResponse message, length delimited. Does not implicitly {@link user.RegisterResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof user.RegisterResponse
         * @static
         * @param {user.IRegisterResponse} message RegisterResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RegisterResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RegisterResponse message from the specified reader or buffer.
         * @function decode
         * @memberof user.RegisterResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {user.RegisterResponse} RegisterResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RegisterResponse.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.user.RegisterResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.int32();
                        break;
                    }
                case 2: {
                        message.message = reader.string();
                        break;
                    }
                case 3: {
                        message.user = $root.user.User.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RegisterResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof user.RegisterResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {user.RegisterResponse} RegisterResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RegisterResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RegisterResponse message.
         * @function verify
         * @memberof user.RegisterResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RegisterResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            if (message.user != null && message.hasOwnProperty("user")) {
                var error = $root.user.User.verify(message.user);
                if (error)
                    return "user." + error;
            }
            return null;
        };

        /**
         * Creates a RegisterResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.RegisterResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.RegisterResponse} RegisterResponse
         */
        RegisterResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.user.RegisterResponse)
                return object;
            var message = new $root.user.RegisterResponse();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.message != null)
                message.message = String(object.message);
            if (object.user != null) {
                if (typeof object.user !== "object")
                    throw TypeError(".user.RegisterResponse.user: object expected");
                message.user = $root.user.User.fromObject(object.user);
            }
            return message;
        };

        /**
         * Creates a plain object from a RegisterResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.RegisterResponse
         * @static
         * @param {user.RegisterResponse} message RegisterResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RegisterResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.code = 0;
                object.message = "";
                object.user = null;
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            if (message.user != null && message.hasOwnProperty("user"))
                object.user = $root.user.User.toObject(message.user, options);
            return object;
        };

        /**
         * Converts this RegisterResponse to JSON.
         * @function toJSON
         * @memberof user.RegisterResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RegisterResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RegisterResponse
         * @function getTypeUrl
         * @memberof user.RegisterResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RegisterResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/user.RegisterResponse";
        };

        return RegisterResponse;
    })();

    user.SendOtpRequest = (function() {

        /**
         * Properties of a SendOtpRequest.
         * @memberof user
         * @interface ISendOtpRequest
         * @property {string|null} [phone] SendOtpRequest phone
         */

        /**
         * Constructs a new SendOtpRequest.
         * @memberof user
         * @classdesc Represents a SendOtpRequest.
         * @implements ISendOtpRequest
         * @constructor
         * @param {user.ISendOtpRequest=} [properties] Properties to set
         */
        function SendOtpRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SendOtpRequest phone.
         * @member {string} phone
         * @memberof user.SendOtpRequest
         * @instance
         */
        SendOtpRequest.prototype.phone = "";

        /**
         * Creates a new SendOtpRequest instance using the specified properties.
         * @function create
         * @memberof user.SendOtpRequest
         * @static
         * @param {user.ISendOtpRequest=} [properties] Properties to set
         * @returns {user.SendOtpRequest} SendOtpRequest instance
         */
        SendOtpRequest.create = function create(properties) {
            return new SendOtpRequest(properties);
        };

        /**
         * Encodes the specified SendOtpRequest message. Does not implicitly {@link user.SendOtpRequest.verify|verify} messages.
         * @function encode
         * @memberof user.SendOtpRequest
         * @static
         * @param {user.ISendOtpRequest} message SendOtpRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendOtpRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.phone != null && Object.hasOwnProperty.call(message, "phone"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.phone);
            return writer;
        };

        /**
         * Encodes the specified SendOtpRequest message, length delimited. Does not implicitly {@link user.SendOtpRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof user.SendOtpRequest
         * @static
         * @param {user.ISendOtpRequest} message SendOtpRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendOtpRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendOtpRequest message from the specified reader or buffer.
         * @function decode
         * @memberof user.SendOtpRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {user.SendOtpRequest} SendOtpRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendOtpRequest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.user.SendOtpRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.phone = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SendOtpRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof user.SendOtpRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {user.SendOtpRequest} SendOtpRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendOtpRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SendOtpRequest message.
         * @function verify
         * @memberof user.SendOtpRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SendOtpRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.phone != null && message.hasOwnProperty("phone"))
                if (!$util.isString(message.phone))
                    return "phone: string expected";
            return null;
        };

        /**
         * Creates a SendOtpRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.SendOtpRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.SendOtpRequest} SendOtpRequest
         */
        SendOtpRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.user.SendOtpRequest)
                return object;
            var message = new $root.user.SendOtpRequest();
            if (object.phone != null)
                message.phone = String(object.phone);
            return message;
        };

        /**
         * Creates a plain object from a SendOtpRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.SendOtpRequest
         * @static
         * @param {user.SendOtpRequest} message SendOtpRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SendOtpRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.phone = "";
            if (message.phone != null && message.hasOwnProperty("phone"))
                object.phone = message.phone;
            return object;
        };

        /**
         * Converts this SendOtpRequest to JSON.
         * @function toJSON
         * @memberof user.SendOtpRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendOtpRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SendOtpRequest
         * @function getTypeUrl
         * @memberof user.SendOtpRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SendOtpRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/user.SendOtpRequest";
        };

        return SendOtpRequest;
    })();

    user.SendOtpResponse = (function() {

        /**
         * Properties of a SendOtpResponse.
         * @memberof user
         * @interface ISendOtpResponse
         * @property {number|null} [code] SendOtpResponse code
         * @property {string|null} [message] SendOtpResponse message
         * @property {string|null} [verificationId] SendOtpResponse verificationId
         * @property {string|null} [smsCode] SendOtpResponse smsCode
         */

        /**
         * Constructs a new SendOtpResponse.
         * @memberof user
         * @classdesc Represents a SendOtpResponse.
         * @implements ISendOtpResponse
         * @constructor
         * @param {user.ISendOtpResponse=} [properties] Properties to set
         */
        function SendOtpResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SendOtpResponse code.
         * @member {number} code
         * @memberof user.SendOtpResponse
         * @instance
         */
        SendOtpResponse.prototype.code = 0;

        /**
         * SendOtpResponse message.
         * @member {string} message
         * @memberof user.SendOtpResponse
         * @instance
         */
        SendOtpResponse.prototype.message = "";

        /**
         * SendOtpResponse verificationId.
         * @member {string} verificationId
         * @memberof user.SendOtpResponse
         * @instance
         */
        SendOtpResponse.prototype.verificationId = "";

        /**
         * SendOtpResponse smsCode.
         * @member {string} smsCode
         * @memberof user.SendOtpResponse
         * @instance
         */
        SendOtpResponse.prototype.smsCode = "";

        /**
         * Creates a new SendOtpResponse instance using the specified properties.
         * @function create
         * @memberof user.SendOtpResponse
         * @static
         * @param {user.ISendOtpResponse=} [properties] Properties to set
         * @returns {user.SendOtpResponse} SendOtpResponse instance
         */
        SendOtpResponse.create = function create(properties) {
            return new SendOtpResponse(properties);
        };

        /**
         * Encodes the specified SendOtpResponse message. Does not implicitly {@link user.SendOtpResponse.verify|verify} messages.
         * @function encode
         * @memberof user.SendOtpResponse
         * @static
         * @param {user.ISendOtpResponse} message SendOtpResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendOtpResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
            if (message.verificationId != null && Object.hasOwnProperty.call(message, "verificationId"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.verificationId);
            if (message.smsCode != null && Object.hasOwnProperty.call(message, "smsCode"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.smsCode);
            return writer;
        };

        /**
         * Encodes the specified SendOtpResponse message, length delimited. Does not implicitly {@link user.SendOtpResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof user.SendOtpResponse
         * @static
         * @param {user.ISendOtpResponse} message SendOtpResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendOtpResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendOtpResponse message from the specified reader or buffer.
         * @function decode
         * @memberof user.SendOtpResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {user.SendOtpResponse} SendOtpResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendOtpResponse.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.user.SendOtpResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.int32();
                        break;
                    }
                case 2: {
                        message.message = reader.string();
                        break;
                    }
                case 3: {
                        message.verificationId = reader.string();
                        break;
                    }
                case 4: {
                        message.smsCode = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SendOtpResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof user.SendOtpResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {user.SendOtpResponse} SendOtpResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendOtpResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SendOtpResponse message.
         * @function verify
         * @memberof user.SendOtpResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SendOtpResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            if (message.verificationId != null && message.hasOwnProperty("verificationId"))
                if (!$util.isString(message.verificationId))
                    return "verificationId: string expected";
            if (message.smsCode != null && message.hasOwnProperty("smsCode"))
                if (!$util.isString(message.smsCode))
                    return "smsCode: string expected";
            return null;
        };

        /**
         * Creates a SendOtpResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.SendOtpResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.SendOtpResponse} SendOtpResponse
         */
        SendOtpResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.user.SendOtpResponse)
                return object;
            var message = new $root.user.SendOtpResponse();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.message != null)
                message.message = String(object.message);
            if (object.verificationId != null)
                message.verificationId = String(object.verificationId);
            if (object.smsCode != null)
                message.smsCode = String(object.smsCode);
            return message;
        };

        /**
         * Creates a plain object from a SendOtpResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.SendOtpResponse
         * @static
         * @param {user.SendOtpResponse} message SendOtpResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SendOtpResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.code = 0;
                object.message = "";
                object.verificationId = "";
                object.smsCode = "";
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            if (message.verificationId != null && message.hasOwnProperty("verificationId"))
                object.verificationId = message.verificationId;
            if (message.smsCode != null && message.hasOwnProperty("smsCode"))
                object.smsCode = message.smsCode;
            return object;
        };

        /**
         * Converts this SendOtpResponse to JSON.
         * @function toJSON
         * @memberof user.SendOtpResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendOtpResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SendOtpResponse
         * @function getTypeUrl
         * @memberof user.SendOtpResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SendOtpResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/user.SendOtpResponse";
        };

        return SendOtpResponse;
    })();

    user.VerifyOtpRequest = (function() {

        /**
         * Properties of a VerifyOtpRequest.
         * @memberof user
         * @interface IVerifyOtpRequest
         * @property {string|null} [verificationId] VerifyOtpRequest verificationId
         * @property {string|null} [smsCode] VerifyOtpRequest smsCode
         */

        /**
         * Constructs a new VerifyOtpRequest.
         * @memberof user
         * @classdesc Represents a VerifyOtpRequest.
         * @implements IVerifyOtpRequest
         * @constructor
         * @param {user.IVerifyOtpRequest=} [properties] Properties to set
         */
        function VerifyOtpRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * VerifyOtpRequest verificationId.
         * @member {string} verificationId
         * @memberof user.VerifyOtpRequest
         * @instance
         */
        VerifyOtpRequest.prototype.verificationId = "";

        /**
         * VerifyOtpRequest smsCode.
         * @member {string} smsCode
         * @memberof user.VerifyOtpRequest
         * @instance
         */
        VerifyOtpRequest.prototype.smsCode = "";

        /**
         * Creates a new VerifyOtpRequest instance using the specified properties.
         * @function create
         * @memberof user.VerifyOtpRequest
         * @static
         * @param {user.IVerifyOtpRequest=} [properties] Properties to set
         * @returns {user.VerifyOtpRequest} VerifyOtpRequest instance
         */
        VerifyOtpRequest.create = function create(properties) {
            return new VerifyOtpRequest(properties);
        };

        /**
         * Encodes the specified VerifyOtpRequest message. Does not implicitly {@link user.VerifyOtpRequest.verify|verify} messages.
         * @function encode
         * @memberof user.VerifyOtpRequest
         * @static
         * @param {user.IVerifyOtpRequest} message VerifyOtpRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VerifyOtpRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.verificationId != null && Object.hasOwnProperty.call(message, "verificationId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.verificationId);
            if (message.smsCode != null && Object.hasOwnProperty.call(message, "smsCode"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.smsCode);
            return writer;
        };

        /**
         * Encodes the specified VerifyOtpRequest message, length delimited. Does not implicitly {@link user.VerifyOtpRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof user.VerifyOtpRequest
         * @static
         * @param {user.IVerifyOtpRequest} message VerifyOtpRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VerifyOtpRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a VerifyOtpRequest message from the specified reader or buffer.
         * @function decode
         * @memberof user.VerifyOtpRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {user.VerifyOtpRequest} VerifyOtpRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VerifyOtpRequest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.user.VerifyOtpRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.verificationId = reader.string();
                        break;
                    }
                case 2: {
                        message.smsCode = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a VerifyOtpRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof user.VerifyOtpRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {user.VerifyOtpRequest} VerifyOtpRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VerifyOtpRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a VerifyOtpRequest message.
         * @function verify
         * @memberof user.VerifyOtpRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        VerifyOtpRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.verificationId != null && message.hasOwnProperty("verificationId"))
                if (!$util.isString(message.verificationId))
                    return "verificationId: string expected";
            if (message.smsCode != null && message.hasOwnProperty("smsCode"))
                if (!$util.isString(message.smsCode))
                    return "smsCode: string expected";
            return null;
        };

        /**
         * Creates a VerifyOtpRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.VerifyOtpRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.VerifyOtpRequest} VerifyOtpRequest
         */
        VerifyOtpRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.user.VerifyOtpRequest)
                return object;
            var message = new $root.user.VerifyOtpRequest();
            if (object.verificationId != null)
                message.verificationId = String(object.verificationId);
            if (object.smsCode != null)
                message.smsCode = String(object.smsCode);
            return message;
        };

        /**
         * Creates a plain object from a VerifyOtpRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.VerifyOtpRequest
         * @static
         * @param {user.VerifyOtpRequest} message VerifyOtpRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        VerifyOtpRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.verificationId = "";
                object.smsCode = "";
            }
            if (message.verificationId != null && message.hasOwnProperty("verificationId"))
                object.verificationId = message.verificationId;
            if (message.smsCode != null && message.hasOwnProperty("smsCode"))
                object.smsCode = message.smsCode;
            return object;
        };

        /**
         * Converts this VerifyOtpRequest to JSON.
         * @function toJSON
         * @memberof user.VerifyOtpRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        VerifyOtpRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for VerifyOtpRequest
         * @function getTypeUrl
         * @memberof user.VerifyOtpRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        VerifyOtpRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/user.VerifyOtpRequest";
        };

        return VerifyOtpRequest;
    })();

    user.VerifyOtpResponse = (function() {

        /**
         * Properties of a VerifyOtpResponse.
         * @memberof user
         * @interface IVerifyOtpResponse
         * @property {number|null} [code] VerifyOtpResponse code
         * @property {string|null} [message] VerifyOtpResponse message
         * @property {user.IUser|null} [user] VerifyOtpResponse user
         */

        /**
         * Constructs a new VerifyOtpResponse.
         * @memberof user
         * @classdesc Represents a VerifyOtpResponse.
         * @implements IVerifyOtpResponse
         * @constructor
         * @param {user.IVerifyOtpResponse=} [properties] Properties to set
         */
        function VerifyOtpResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * VerifyOtpResponse code.
         * @member {number} code
         * @memberof user.VerifyOtpResponse
         * @instance
         */
        VerifyOtpResponse.prototype.code = 0;

        /**
         * VerifyOtpResponse message.
         * @member {string} message
         * @memberof user.VerifyOtpResponse
         * @instance
         */
        VerifyOtpResponse.prototype.message = "";

        /**
         * VerifyOtpResponse user.
         * @member {user.IUser|null|undefined} user
         * @memberof user.VerifyOtpResponse
         * @instance
         */
        VerifyOtpResponse.prototype.user = null;

        /**
         * Creates a new VerifyOtpResponse instance using the specified properties.
         * @function create
         * @memberof user.VerifyOtpResponse
         * @static
         * @param {user.IVerifyOtpResponse=} [properties] Properties to set
         * @returns {user.VerifyOtpResponse} VerifyOtpResponse instance
         */
        VerifyOtpResponse.create = function create(properties) {
            return new VerifyOtpResponse(properties);
        };

        /**
         * Encodes the specified VerifyOtpResponse message. Does not implicitly {@link user.VerifyOtpResponse.verify|verify} messages.
         * @function encode
         * @memberof user.VerifyOtpResponse
         * @static
         * @param {user.IVerifyOtpResponse} message VerifyOtpResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VerifyOtpResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
            if (message.user != null && Object.hasOwnProperty.call(message, "user"))
                $root.user.User.encode(message.user, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified VerifyOtpResponse message, length delimited. Does not implicitly {@link user.VerifyOtpResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof user.VerifyOtpResponse
         * @static
         * @param {user.IVerifyOtpResponse} message VerifyOtpResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VerifyOtpResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a VerifyOtpResponse message from the specified reader or buffer.
         * @function decode
         * @memberof user.VerifyOtpResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {user.VerifyOtpResponse} VerifyOtpResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VerifyOtpResponse.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.user.VerifyOtpResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.int32();
                        break;
                    }
                case 2: {
                        message.message = reader.string();
                        break;
                    }
                case 3: {
                        message.user = $root.user.User.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a VerifyOtpResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof user.VerifyOtpResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {user.VerifyOtpResponse} VerifyOtpResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VerifyOtpResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a VerifyOtpResponse message.
         * @function verify
         * @memberof user.VerifyOtpResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        VerifyOtpResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            if (message.user != null && message.hasOwnProperty("user")) {
                var error = $root.user.User.verify(message.user);
                if (error)
                    return "user." + error;
            }
            return null;
        };

        /**
         * Creates a VerifyOtpResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.VerifyOtpResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.VerifyOtpResponse} VerifyOtpResponse
         */
        VerifyOtpResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.user.VerifyOtpResponse)
                return object;
            var message = new $root.user.VerifyOtpResponse();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.message != null)
                message.message = String(object.message);
            if (object.user != null) {
                if (typeof object.user !== "object")
                    throw TypeError(".user.VerifyOtpResponse.user: object expected");
                message.user = $root.user.User.fromObject(object.user);
            }
            return message;
        };

        /**
         * Creates a plain object from a VerifyOtpResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.VerifyOtpResponse
         * @static
         * @param {user.VerifyOtpResponse} message VerifyOtpResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        VerifyOtpResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.code = 0;
                object.message = "";
                object.user = null;
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            if (message.user != null && message.hasOwnProperty("user"))
                object.user = $root.user.User.toObject(message.user, options);
            return object;
        };

        /**
         * Converts this VerifyOtpResponse to JSON.
         * @function toJSON
         * @memberof user.VerifyOtpResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        VerifyOtpResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for VerifyOtpResponse
         * @function getTypeUrl
         * @memberof user.VerifyOtpResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        VerifyOtpResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/user.VerifyOtpResponse";
        };

        return VerifyOtpResponse;
    })();

    return user;
})();

module.exports = $root;
