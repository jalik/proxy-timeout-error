FROM httpd:2.4

RUN sed -i '/LoadModule proxy_module/s/^#//g' /usr/local/apache2/conf/httpd.conf \
    && sed -i '/LoadModule proxy_http_module/s/^#//g' /usr/local/apache2/conf/httpd.conf \
    && sed -i '/conf\/extra\/httpd\-vhosts\.conf/s/^#//g' /usr/local/apache2/conf/httpd.conf

COPY ./httpd-vhosts.conf /usr/local/apache2/conf/extra/httpd-vhosts.conf
