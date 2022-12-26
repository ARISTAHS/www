<?

function generateRandomPassword($length=8, $strength=0) {

    $vowels = 'aeuy';

    $consonants = 'bdghjmnpqrstvz';   // 맘대로 찍어도됨 

    if ($strength & 1) {  // 1 : 섞어서 나오게 

        $consonants .= 'BDGHJLMNPQRSTVWXZ';

    }

    if ($strength & 2) {  // 대문자 소문자만 섞어서

        $vowels .= "AEUY";

    }

    if ($strength & 4) {  // 숫자까지 섞어서 

        $consonants .= '23456789';

    }

    if ($strength & 8) {  // 특수문자가지 섞어서 나오게

        $consonants .= '@#$%';

    }


    $password = '';

    $alt = time() % 2;   // 난수 쓰려고 만듬

    for ($i = 0; $i < $length; $i++) {

        if ($alt == 1) {

            $password .= $consonants[(rand() % strlen($consonants))];

            $alt = 0;

        } else {

            $password .= $vowels[(rand() % strlen($vowels))];

            $alt = 1;

        }

    }

    return $password;

}


$ranpass = generateRandomPassword(8,2);

echo "$ranpass";

?>