#!/bin/bash

# Generate for mobile (Flutter)
echo "Generating proto files for mobile..."

# Đảm bảo thư mục output tồn tại
mkdir -p mobile/lib/gen

# Generate proto files
cd proto
protoc --dart_out=../mobile/lib/gen \
       --proto_path=. \
       user.proto \
       auth.proto \
       common.proto \
       matching.proto \
       test.proto
cd ..

echo "Proto generation completed!" 