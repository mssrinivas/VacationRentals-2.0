#!/bin/sh
# Tomcat init script for Linux.
#
# chkconfig: 2345 96 14
# description: The Apache Tomcat servlet/JSP container.
JAVA_HOME=/usr/lib/jvm/java-1.8.0-openjdk.x86_64
CATALINA_HOME=/usr/share/apache-tomcat-7.0.90
export JAVA_HOME CATALINA_HOME
exec $CATALINA_HOME/bin/catalina.sh $*


<tomcat-users>
<role rolename="manager-script"/>
<role rolename="manager-jmx"/>
<role rolename="manager-status"/>
<role rolename="admin-gui"/>
<role rolename="manager-gui"/>
<user username="tomcat" password="tomcat" 
  roles="manager-gui,manager-status,admin-gui"/>
<user username="tomcattools" password="tomcattools"/>
</tomcat-users>

grant all on cmpe281.* to 'cmpe281'@'%' identified by 'cmpe281';

 mysql --user=cmpe281 --password=cmpe281 cmpe281