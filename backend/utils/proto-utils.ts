import * as proto from '../src/protos/generated/user_pb';
import { Response } from 'express';

/**
 * Converts plain JavaScript objects to their protobuf equivalents
 */
export class ProtoConverter {
  /**
   * Convert a plain object to a SendOtpRequest protobuf message
   */
  static toSendOtpRequest(data: { phone: string }): proto.user.SendOtpRequest {
    const request = new proto.user.SendOtpRequest();
    if (data.phone) {
      request.phone = data.phone;
    }
    return request;
  }

  /**
   * Convert a plain object to a SendOtpResponse protobuf message
   */
  static toSendOtpResponse(data: {
    code: number;
    message: string;
    verificationId: string;
    smsCode?: string;
  }): proto.user.SendOtpResponse {
    const response = new proto.user.SendOtpResponse();
    response.code = data.code;
    response.message = data.message;
    response.verificationId = data.verificationId;
    if (data.smsCode) {
      response.smsCode = data.smsCode;
    }
    return response;
  }

  /**
   * Convert a plain object to a VerifyOtpRequest protobuf message
   */
  static toVerifyOtpRequest(data: {
    verificationId: string;
    smsCode: string;
  }): proto.user.VerifyOtpRequest {
    const request = new proto.user.VerifyOtpRequest();
    request.verificationId = data.verificationId;
    request.smsCode = data.smsCode;
    return request;
  }

  /**
   * Convert a plain object to a VerifyOtpResponse protobuf message
   */
  static toVerifyOtpResponse(data: {
    code: number;
    message: string;
    user?: any;
  }): proto.user.VerifyOtpResponse {
    const response = new proto.user.VerifyOtpResponse();
    response.code = data.code;
    response.message = data.message;
    
    if (data.user) {
      const userProto = new proto.user.User();
      userProto.id = data.user.id || data.user._id?.toString() || '';
      userProto.email = data.user.email || '';
      userProto.fullName = data.user.fullName || '';
      userProto.gender = data.user.gender || '';
      userProto.birthday = data.user.birthday || 0;
      
      if (data.user.interests && Array.isArray(data.user.interests)) {
        userProto.interests = data.user.interests;
      }
      
      if (data.user.photos && Array.isArray(data.user.photos)) {
        userProto.photos = data.user.photos;
      }
      
      response.user = userProto;
    }
    
    return response;
  }

  /**
   * Convert a protobuf User message to a plain object
   */
  static fromUserProto(userProto: proto.user.User): any {
    if (!userProto) return null;
    
    return {
      id: userProto.id,
      email: userProto.email,
      fullName: userProto.fullName,
      gender: userProto.gender,
      birthday: userProto.birthday,
      interests: userProto.interests || [],
      photos: userProto.photos || []
    };
  }
}

/**
 * Middleware to parse protobuf request body
 */
export const parseProtoBody = (protoType: any) => {
  return (req: any, res: any, next: any) => {
    try {
      if (req.headers['content-type'] === 'application/protobuf') {
        const buffer = Buffer.from(req.body);
        req.protoBody = protoType.decode(buffer);
        
        // Also add to regular body for compatibility
        req.body = Object.assign({}, req.protoBody);
      }
      next();
    } catch (error) {
      next(error);
    }
  };
};

/**
 * Helper to send protobuf response
 */
export const sendProtoResponse = (res: Response, protoMessage: any): Response => {
  if (res.req.headers['accept'] === 'application/protobuf') {
    const buffer = protoMessage.encode().finish();
    res.setHeader('Content-Type', 'application/protobuf');
    return res.send(buffer);
  } else {
    // Convert to plain object and send as JSON for compatibility
    return res.json(protoMessage.toJSON());
  }
}; 