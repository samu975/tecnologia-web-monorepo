FROM nginx:alpine

copy ./nginx.conf /etc/nginx/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]