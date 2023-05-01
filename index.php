<?php

class Customer{
    protected $name;

    public function __construct($name){
        $this -> name = $name;
    }
    // public function __toString()
    // {
    //     return string
    // }
    public function __toString()
	{
		return  $this->name;
	}

    protected function format()
	{
		return ucwords($this->name);
	}

    public function getName($name){
        return $this-> format($this -> $name);
    }
}

$dennis = new Customer('Peris Dunga');
echo $dennis;
?>