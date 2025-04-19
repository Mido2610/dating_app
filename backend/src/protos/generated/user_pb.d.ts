import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace user. */
export namespace user {

    /** Properties of a User. */
    interface IUser {

        /** User id */
        id?: (string|null);

        /** User email */
        email?: (string|null);

        /** User password */
        password?: (string|null);

        /** User fullName */
        fullName?: (string|null);

        /** User gender */
        gender?: (string|null);

        /** User birthday */
        birthday?: (number|Long|null);

        /** User interests */
        interests?: (string[]|null);

        /** User photos */
        photos?: (string[]|null);
    }

    /** Represents a User. */
    class User implements IUser {

        /**
         * Constructs a new User.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.IUser);

        /** User id. */
        public id: string;

        /** User email. */
        public email: string;

        /** User password. */
        public password: string;

        /** User fullName. */
        public fullName: string;

        /** User gender. */
        public gender: string;

        /** User birthday. */
        public birthday: (number|Long);

        /** User interests. */
        public interests: string[];

        /** User photos. */
        public photos: string[];

        /**
         * Creates a new User instance using the specified properties.
         * @param [properties] Properties to set
         * @returns User instance
         */
        public static create(properties?: user.IUser): user.User;

        /**
         * Encodes the specified User message. Does not implicitly {@link user.User.verify|verify} messages.
         * @param message User message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: user.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified User message, length delimited. Does not implicitly {@link user.User.verify|verify} messages.
         * @param message User message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: user.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a User message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user.User;

        /**
         * Decodes a User message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user.User;

        /**
         * Verifies a User message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a User message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns User
         */
        public static fromObject(object: { [k: string]: any }): user.User;

        /**
         * Creates a plain object from a User message. Also converts values to other types if specified.
         * @param message User
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.User, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this User to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for User
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AccessToken. */
    interface IAccessToken {

        /** AccessToken token */
        token?: (string|null);

        /** AccessToken expiresAt */
        expiresAt?: (string|null);
    }

    /** Represents an AccessToken. */
    class AccessToken implements IAccessToken {

        /**
         * Constructs a new AccessToken.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.IAccessToken);

        /** AccessToken token. */
        public token: string;

        /** AccessToken expiresAt. */
        public expiresAt: string;

        /**
         * Creates a new AccessToken instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AccessToken instance
         */
        public static create(properties?: user.IAccessToken): user.AccessToken;

        /**
         * Encodes the specified AccessToken message. Does not implicitly {@link user.AccessToken.verify|verify} messages.
         * @param message AccessToken message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: user.IAccessToken, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AccessToken message, length delimited. Does not implicitly {@link user.AccessToken.verify|verify} messages.
         * @param message AccessToken message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: user.IAccessToken, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AccessToken message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AccessToken
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user.AccessToken;

        /**
         * Decodes an AccessToken message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AccessToken
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user.AccessToken;

        /**
         * Verifies an AccessToken message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AccessToken message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AccessToken
         */
        public static fromObject(object: { [k: string]: any }): user.AccessToken;

        /**
         * Creates a plain object from an AccessToken message. Also converts values to other types if specified.
         * @param message AccessToken
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.AccessToken, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AccessToken to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AccessToken
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a LoginRequest. */
    interface ILoginRequest {

        /** LoginRequest email */
        email?: (string|null);

        /** LoginRequest password */
        password?: (string|null);
    }

    /** Represents a LoginRequest. */
    class LoginRequest implements ILoginRequest {

        /**
         * Constructs a new LoginRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.ILoginRequest);

        /** LoginRequest email. */
        public email: string;

        /** LoginRequest password. */
        public password: string;

        /**
         * Creates a new LoginRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginRequest instance
         */
        public static create(properties?: user.ILoginRequest): user.LoginRequest;

        /**
         * Encodes the specified LoginRequest message. Does not implicitly {@link user.LoginRequest.verify|verify} messages.
         * @param message LoginRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: user.ILoginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginRequest message, length delimited. Does not implicitly {@link user.LoginRequest.verify|verify} messages.
         * @param message LoginRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: user.ILoginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user.LoginRequest;

        /**
         * Decodes a LoginRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user.LoginRequest;

        /**
         * Verifies a LoginRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginRequest
         */
        public static fromObject(object: { [k: string]: any }): user.LoginRequest;

        /**
         * Creates a plain object from a LoginRequest message. Also converts values to other types if specified.
         * @param message LoginRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.LoginRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for LoginRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a LoginResponse. */
    interface ILoginResponse {

        /** LoginResponse code */
        code?: (number|null);

        /** LoginResponse message */
        message?: (string|null);

        /** LoginResponse loginResult */
        loginResult?: (user.ILoginResponseResult|null);
    }

    /** Represents a LoginResponse. */
    class LoginResponse implements ILoginResponse {

        /**
         * Constructs a new LoginResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.ILoginResponse);

        /** LoginResponse code. */
        public code: number;

        /** LoginResponse message. */
        public message: string;

        /** LoginResponse loginResult. */
        public loginResult?: (user.ILoginResponseResult|null);

        /**
         * Creates a new LoginResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginResponse instance
         */
        public static create(properties?: user.ILoginResponse): user.LoginResponse;

        /**
         * Encodes the specified LoginResponse message. Does not implicitly {@link user.LoginResponse.verify|verify} messages.
         * @param message LoginResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: user.ILoginResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginResponse message, length delimited. Does not implicitly {@link user.LoginResponse.verify|verify} messages.
         * @param message LoginResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: user.ILoginResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user.LoginResponse;

        /**
         * Decodes a LoginResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user.LoginResponse;

        /**
         * Verifies a LoginResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginResponse
         */
        public static fromObject(object: { [k: string]: any }): user.LoginResponse;

        /**
         * Creates a plain object from a LoginResponse message. Also converts values to other types if specified.
         * @param message LoginResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.LoginResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for LoginResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a LoginResponseResult. */
    interface ILoginResponseResult {

        /** LoginResponseResult user */
        user?: (user.IUser|null);

        /** LoginResponseResult accessToken */
        accessToken?: (user.IAccessToken|null);
    }

    /** Represents a LoginResponseResult. */
    class LoginResponseResult implements ILoginResponseResult {

        /**
         * Constructs a new LoginResponseResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.ILoginResponseResult);

        /** LoginResponseResult user. */
        public user?: (user.IUser|null);

        /** LoginResponseResult accessToken. */
        public accessToken?: (user.IAccessToken|null);

        /**
         * Creates a new LoginResponseResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginResponseResult instance
         */
        public static create(properties?: user.ILoginResponseResult): user.LoginResponseResult;

        /**
         * Encodes the specified LoginResponseResult message. Does not implicitly {@link user.LoginResponseResult.verify|verify} messages.
         * @param message LoginResponseResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: user.ILoginResponseResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginResponseResult message, length delimited. Does not implicitly {@link user.LoginResponseResult.verify|verify} messages.
         * @param message LoginResponseResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: user.ILoginResponseResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginResponseResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginResponseResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user.LoginResponseResult;

        /**
         * Decodes a LoginResponseResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginResponseResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user.LoginResponseResult;

        /**
         * Verifies a LoginResponseResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginResponseResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginResponseResult
         */
        public static fromObject(object: { [k: string]: any }): user.LoginResponseResult;

        /**
         * Creates a plain object from a LoginResponseResult message. Also converts values to other types if specified.
         * @param message LoginResponseResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.LoginResponseResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginResponseResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for LoginResponseResult
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RegisterRequest. */
    interface IRegisterRequest {

        /** RegisterRequest email */
        email?: (string|null);

        /** RegisterRequest password */
        password?: (string|null);

        /** RegisterRequest fullName */
        fullName?: (string|null);

        /** RegisterRequest gender */
        gender?: (string|null);

        /** RegisterRequest birthday */
        birthday?: (number|Long|null);

        /** RegisterRequest interests */
        interests?: (string[]|null);

        /** RegisterRequest photos */
        photos?: (string[]|null);
    }

    /** Represents a RegisterRequest. */
    class RegisterRequest implements IRegisterRequest {

        /**
         * Constructs a new RegisterRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.IRegisterRequest);

        /** RegisterRequest email. */
        public email: string;

        /** RegisterRequest password. */
        public password: string;

        /** RegisterRequest fullName. */
        public fullName: string;

        /** RegisterRequest gender. */
        public gender: string;

        /** RegisterRequest birthday. */
        public birthday: (number|Long);

        /** RegisterRequest interests. */
        public interests: string[];

        /** RegisterRequest photos. */
        public photos: string[];

        /**
         * Creates a new RegisterRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RegisterRequest instance
         */
        public static create(properties?: user.IRegisterRequest): user.RegisterRequest;

        /**
         * Encodes the specified RegisterRequest message. Does not implicitly {@link user.RegisterRequest.verify|verify} messages.
         * @param message RegisterRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: user.IRegisterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RegisterRequest message, length delimited. Does not implicitly {@link user.RegisterRequest.verify|verify} messages.
         * @param message RegisterRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: user.IRegisterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RegisterRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RegisterRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user.RegisterRequest;

        /**
         * Decodes a RegisterRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RegisterRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user.RegisterRequest;

        /**
         * Verifies a RegisterRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RegisterRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RegisterRequest
         */
        public static fromObject(object: { [k: string]: any }): user.RegisterRequest;

        /**
         * Creates a plain object from a RegisterRequest message. Also converts values to other types if specified.
         * @param message RegisterRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.RegisterRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RegisterRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RegisterRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RegisterResponse. */
    interface IRegisterResponse {

        /** RegisterResponse code */
        code?: (number|null);

        /** RegisterResponse message */
        message?: (string|null);

        /** RegisterResponse user */
        user?: (user.IUser|null);
    }

    /** Represents a RegisterResponse. */
    class RegisterResponse implements IRegisterResponse {

        /**
         * Constructs a new RegisterResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.IRegisterResponse);

        /** RegisterResponse code. */
        public code: number;

        /** RegisterResponse message. */
        public message: string;

        /** RegisterResponse user. */
        public user?: (user.IUser|null);

        /**
         * Creates a new RegisterResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RegisterResponse instance
         */
        public static create(properties?: user.IRegisterResponse): user.RegisterResponse;

        /**
         * Encodes the specified RegisterResponse message. Does not implicitly {@link user.RegisterResponse.verify|verify} messages.
         * @param message RegisterResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: user.IRegisterResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RegisterResponse message, length delimited. Does not implicitly {@link user.RegisterResponse.verify|verify} messages.
         * @param message RegisterResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: user.IRegisterResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RegisterResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RegisterResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user.RegisterResponse;

        /**
         * Decodes a RegisterResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RegisterResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user.RegisterResponse;

        /**
         * Verifies a RegisterResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RegisterResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RegisterResponse
         */
        public static fromObject(object: { [k: string]: any }): user.RegisterResponse;

        /**
         * Creates a plain object from a RegisterResponse message. Also converts values to other types if specified.
         * @param message RegisterResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.RegisterResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RegisterResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RegisterResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SendOtpRequest. */
    interface ISendOtpRequest {

        /** SendOtpRequest phone */
        phone?: (string|null);
    }

    /** Represents a SendOtpRequest. */
    class SendOtpRequest implements ISendOtpRequest {

        /**
         * Constructs a new SendOtpRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.ISendOtpRequest);

        /** SendOtpRequest phone. */
        public phone: string;

        /**
         * Creates a new SendOtpRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendOtpRequest instance
         */
        public static create(properties?: user.ISendOtpRequest): user.SendOtpRequest;

        /**
         * Encodes the specified SendOtpRequest message. Does not implicitly {@link user.SendOtpRequest.verify|verify} messages.
         * @param message SendOtpRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: user.ISendOtpRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendOtpRequest message, length delimited. Does not implicitly {@link user.SendOtpRequest.verify|verify} messages.
         * @param message SendOtpRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: user.ISendOtpRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendOtpRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendOtpRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user.SendOtpRequest;

        /**
         * Decodes a SendOtpRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendOtpRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user.SendOtpRequest;

        /**
         * Verifies a SendOtpRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SendOtpRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SendOtpRequest
         */
        public static fromObject(object: { [k: string]: any }): user.SendOtpRequest;

        /**
         * Creates a plain object from a SendOtpRequest message. Also converts values to other types if specified.
         * @param message SendOtpRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.SendOtpRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendOtpRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SendOtpRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SendOtpResponse. */
    interface ISendOtpResponse {

        /** SendOtpResponse code */
        code?: (number|null);

        /** SendOtpResponse message */
        message?: (string|null);

        /** SendOtpResponse verificationId */
        verificationId?: (string|null);

        /** SendOtpResponse smsCode */
        smsCode?: (string|null);
    }

    /** Represents a SendOtpResponse. */
    class SendOtpResponse implements ISendOtpResponse {

        /**
         * Constructs a new SendOtpResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.ISendOtpResponse);

        /** SendOtpResponse code. */
        public code: number;

        /** SendOtpResponse message. */
        public message: string;

        /** SendOtpResponse verificationId. */
        public verificationId: string;

        /** SendOtpResponse smsCode. */
        public smsCode: string;

        /**
         * Creates a new SendOtpResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendOtpResponse instance
         */
        public static create(properties?: user.ISendOtpResponse): user.SendOtpResponse;

        /**
         * Encodes the specified SendOtpResponse message. Does not implicitly {@link user.SendOtpResponse.verify|verify} messages.
         * @param message SendOtpResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: user.ISendOtpResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendOtpResponse message, length delimited. Does not implicitly {@link user.SendOtpResponse.verify|verify} messages.
         * @param message SendOtpResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: user.ISendOtpResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendOtpResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendOtpResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user.SendOtpResponse;

        /**
         * Decodes a SendOtpResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendOtpResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user.SendOtpResponse;

        /**
         * Verifies a SendOtpResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SendOtpResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SendOtpResponse
         */
        public static fromObject(object: { [k: string]: any }): user.SendOtpResponse;

        /**
         * Creates a plain object from a SendOtpResponse message. Also converts values to other types if specified.
         * @param message SendOtpResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.SendOtpResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendOtpResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SendOtpResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a VerifyOtpRequest. */
    interface IVerifyOtpRequest {

        /** VerifyOtpRequest verificationId */
        verificationId?: (string|null);

        /** VerifyOtpRequest smsCode */
        smsCode?: (string|null);
    }

    /** Represents a VerifyOtpRequest. */
    class VerifyOtpRequest implements IVerifyOtpRequest {

        /**
         * Constructs a new VerifyOtpRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.IVerifyOtpRequest);

        /** VerifyOtpRequest verificationId. */
        public verificationId: string;

        /** VerifyOtpRequest smsCode. */
        public smsCode: string;

        /**
         * Creates a new VerifyOtpRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VerifyOtpRequest instance
         */
        public static create(properties?: user.IVerifyOtpRequest): user.VerifyOtpRequest;

        /**
         * Encodes the specified VerifyOtpRequest message. Does not implicitly {@link user.VerifyOtpRequest.verify|verify} messages.
         * @param message VerifyOtpRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: user.IVerifyOtpRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified VerifyOtpRequest message, length delimited. Does not implicitly {@link user.VerifyOtpRequest.verify|verify} messages.
         * @param message VerifyOtpRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: user.IVerifyOtpRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VerifyOtpRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VerifyOtpRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user.VerifyOtpRequest;

        /**
         * Decodes a VerifyOtpRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VerifyOtpRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user.VerifyOtpRequest;

        /**
         * Verifies a VerifyOtpRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a VerifyOtpRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns VerifyOtpRequest
         */
        public static fromObject(object: { [k: string]: any }): user.VerifyOtpRequest;

        /**
         * Creates a plain object from a VerifyOtpRequest message. Also converts values to other types if specified.
         * @param message VerifyOtpRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.VerifyOtpRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this VerifyOtpRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for VerifyOtpRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a VerifyOtpResponse. */
    interface IVerifyOtpResponse {

        /** VerifyOtpResponse code */
        code?: (number|null);

        /** VerifyOtpResponse message */
        message?: (string|null);

        /** VerifyOtpResponse user */
        user?: (user.IUser|null);
    }

    /** Represents a VerifyOtpResponse. */
    class VerifyOtpResponse implements IVerifyOtpResponse {

        /**
         * Constructs a new VerifyOtpResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.IVerifyOtpResponse);

        /** VerifyOtpResponse code. */
        public code: number;

        /** VerifyOtpResponse message. */
        public message: string;

        /** VerifyOtpResponse user. */
        public user?: (user.IUser|null);

        /**
         * Creates a new VerifyOtpResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VerifyOtpResponse instance
         */
        public static create(properties?: user.IVerifyOtpResponse): user.VerifyOtpResponse;

        /**
         * Encodes the specified VerifyOtpResponse message. Does not implicitly {@link user.VerifyOtpResponse.verify|verify} messages.
         * @param message VerifyOtpResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: user.IVerifyOtpResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified VerifyOtpResponse message, length delimited. Does not implicitly {@link user.VerifyOtpResponse.verify|verify} messages.
         * @param message VerifyOtpResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: user.IVerifyOtpResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VerifyOtpResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VerifyOtpResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user.VerifyOtpResponse;

        /**
         * Decodes a VerifyOtpResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VerifyOtpResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user.VerifyOtpResponse;

        /**
         * Verifies a VerifyOtpResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a VerifyOtpResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns VerifyOtpResponse
         */
        public static fromObject(object: { [k: string]: any }): user.VerifyOtpResponse;

        /**
         * Creates a plain object from a VerifyOtpResponse message. Also converts values to other types if specified.
         * @param message VerifyOtpResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.VerifyOtpResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this VerifyOtpResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for VerifyOtpResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
