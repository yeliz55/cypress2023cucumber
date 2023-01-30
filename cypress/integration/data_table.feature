Feature:  Login Manager Passwords

@manager_id1
Scenario:Manager_Id1
Given url git
When datalari kullanarak sayfaya gir
|username|password|
|Manager|Manager1!|
And login butonuna tikla
Then sayfaya girildigini onayla

@manager_id2 @smoke
Scenario:Manager_Id2
Given url git
When datalari kullanarak sayfaya gir
|username|password|
|Manager2|Manager2!|
And login butonuna tikla
Then sayfaya girildigini onayla

