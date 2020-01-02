
		function do_google_search(type) {
            site = document.getElementById('sercHead').value;

            url = 'https://www.google.com/search?q=';
            url += 'site:' + site;
            switch (type) {
            case 1:
                url += '+intitle:index.of';
                break;
            case 2:
                url += '+ext:xml+|+ext:conf+|+ext:cnf+|+ext:reg+|+ext:inf+|+ext:rdp+|+ext:cfg+|+ext:txt+|+ext:ora+|+ext:ini+ext:sql+|+ext:dbf+|+ext:mdb+ext:log+ext:bkf+|+ext:bkp+|+ext:bak+|+ext:old+|+ext:backup';
                break;
            case 3:
                url += '+inurl:aspx|jsp|php|asp';
                break;
            case 4:
                url += 'inurl:file|load|editor|Files|ewebeditor|editor|uploadfile|eweb|edit';
                break;
            case 5:
                url += '+intext:管理|后台|登陆|用户名|密码|验证码|系统|帐号|admin|login|sys|managetem|password|username';
                break;
            case 6:
                url += '+inurl:login|admin|manage|member|admin_login|login_admin|system|login|user|main|cms';
                break;
            case 7:
                url += '+intext:"sql+syntax+near"+|+intext:"syntax+error+has+occurred"+|+intext:"incorrect+syntax+near"+|+intext:"unexpected+end+of+SQL+command"+|+intext:"Warning:+mysql_connect()"+|+intext:"Warning:+mysql_query()"+|+intext:"Warning:+pg_connect()"';
                break;
            case 8:
                url += '+ext:doc+|+ext:docx+|+ext:odt+|+ext:pdf+|+ext:rtf+|+ext:sxw+|+ext:psw+|+ext:ppt+|+ext:pptx+|+ext:pps+|+ext:csv';
                break;
            case 9:
                url += '+ext:php+intitle:phpinfo+"published+by+the+PHP+Group"';
                break;
            }
            window.open(url);

        }
		function do_lazy_search() {
			site = document.getElementById('sercHead').value;
            url = 'https://www.google.com/search?q=';
            url += 'site:' + site;
			window.open(url+ ' intitle:index.of');
			window.open(url+' ext:xml+|+ext:conf+|+ext:cnf+|+ext:reg+|+ext:inf+|+ext:rdp+|+ext:cfg+|+ext:txt+|+ext:ora+|+ext:ini+ext:sql+|+ext:dbf+|+ext:mdb+ext:log+ext:bkf+|+ext:bkp+|+ext:bak+|+ext:old+|+ext:backup');
			window.open(url+' inurl:aspx|jsp|php|asp');
			window.open(url+' inurl:file|load|editor|Files|ewebeditor|editor|uploadfile|eweb|edit');
			window.open(url+' intext:管理|后台|登陆|用户名|密码|验证码|系统|帐号|admin|login|sys|managetem|password|username');
			window.open(url+' inurl:login|admin|manage|member|admin_login|login_admin|system|login|user|main|cms');
			window.open(url+' intext:"sql+syntax+near"+|+intext:"syntax+error+has+occurred"+|+intext:"incorrect+syntax+near"+|+intext:"unexpected+end+of+SQL+command"+|+intext:"Warning:+mysql_connect()"+|+intext:"Warning:+mysql_query()"+|+intext:"Warning:+pg_connect()"');
			window.open(url+' ext:doc+|+ext:docx+|+ext:odt+|+ext:pdf+|+ext:rtf+|+ext:sxw+|+ext:psw+|+ext:ppt+|+ext:pptx+|+ext:pps+|+ext:csv');
			
		}