public function up()
{
    Schema::create('contacts', function (Blueprint $table) {
        $table->id();
        $table->string('name');
        $table->string('email');
        $table->string('phone');
        $table->timestamps();
    });
}
cp -r dist/your-angular-app/* ../backend/public/
