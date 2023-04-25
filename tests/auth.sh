#!/bin/bash

curl http://localhost:3000/auth -X POST -d '{"username": "test", "password": "passtest"}' -H "Content-Type: application/json"